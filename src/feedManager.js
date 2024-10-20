import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const fetchRssFeed = (urlValue) => {
  const proxyUrl = new URL('https://allorigins.hexlet.app/get');
  proxyUrl.searchParams.set('url', urlValue);
  proxyUrl.searchParams.set('disableCache', 'true');
  const finalUrl = proxyUrl.toString();

  return axios
    .get(finalUrl)
    .then((response) => response.data)
    .catch((error) => {
      if (error.isAxiosError && !error.response) {
        throw new Error('NETWORK_ERROR');
      }
      throw error;
    });
};

const generateRssFeed = (parsedData) => {
  // prettier-ignore
  const {
    feedUrl,
    feedTitle,
    feedDescription,
    posts,
  } = parsedData;

  const structuredPosts = posts.map((post) => ({
    ...post,
    postId: uuidv4(),
  }));

  return {
    feed: {
      feedUrl,
      feedTitle,
      feedDescription,
    },
    posts: structuredPosts,
  };
};

const addNewFeed = (newFeed, feeds, observedState) => {
  const feedsArr = Array.from(feeds);

  if (feedsArr.length === 0) {
    observedState.feeds.add(newFeed);
    return;
  }

  const isDuplicate = feedsArr.some((feed) => feed.feedUrl === newFeed.feedUrl);

  if (!isDuplicate) {
    observedState.feeds.add(newFeed);
  }
};

const addNewPosts = (newPosts, newFeed, posts, observedState) => {
  const postsArr = Array.from(posts);

  const existingPosts = postsArr.filter((existingPost) => {
    const PostsInFeed = existingPost.feed === newFeed.feedUrl;
    return PostsInFeed;
  });

  const filteredNewPosts = newPosts.filter((newPost) => {
    const isDuplicate = !existingPosts.some(
      (post) => post.link === newPost.link,
    );
    return isDuplicate;
  });

  filteredNewPosts.forEach((newPost) => {
    observedState.posts.add(newPost);

    const aElem = document.getElementById(newPost.postId);
    const button = document.querySelector(
      `button[data-id="${newPost.postId}"]`,
    );

    aElem.addEventListener('click', () => {
      observedState.uiState.visitedPosts.add(newPost.postId);
    });

    button.addEventListener('click', () => {
      observedState.uiState.visitedPosts.add(newPost.postId);
    });
  });
};

// prettier-ignore
export {
  fetchRssFeed,
  addNewFeed,
  addNewPosts,
  generateRssFeed,
};
