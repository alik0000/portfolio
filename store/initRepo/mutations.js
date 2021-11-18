export default {
  INIT_REPO(state, repoArray) {
    state.loadedPosts = repoArray
    console.log('Mutations: ', repoArray)
  }
}
