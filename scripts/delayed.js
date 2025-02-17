// add delayed functionality here

const isiBlock = document.querySelector('.isi-wrapper');

if (isiBlock) {
// Fetch the data from your GraphQL endpoint
  fetch('https://publish-p7906-e91530.adobeaemcloud.com/graphql/execute.json/sibe/getAllISIText', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the GraphQL response data
      isiBlock.firstChild.innerHTML = data.data.isiTextList.items[0].ISI_Text.html;
    });
}
