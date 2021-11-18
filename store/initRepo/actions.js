import axios from "axios";

export default {
  initData ({ commit }, context) {
    return axios.get(process.env.baseURL)
      .then(response => {
        const repoArray = []
        for (const i in response.data) {
          // Log the repo name
          console.log('Repo:', response.data[i].name);
          repoArray.push({...response.data[i], id: i})
          console.log('REPO COMMIT IS:*************', {...response.data[i], id: i})
          // // Log the repo description
          // console.log('Description:', response.data[i].description);
          //
          // // Log the repo url
          // console.log('URL:', response.data[i].html_url);
          //
          // // Log the repo created data
          // console.log('Updated:', response.data[i].created_at);
          //
          // // Log the repo updated data
          // console.log('Updated:', response.data[i].updated_at);
          //
          // // Add a separator between each repo
          console.log('=========================')
        }
        console.log('RESULT OF Actions is: ', repoArray)
        commit('INIT_REPO', repoArray)
      })
      .catch(err => {console.error('Error: ', context.error(err))})
  }
}
