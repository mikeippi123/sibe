/* import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const url = 'https://publish-p7906-e91530.adobeaemcloud.com/graphql/execute.json/sibe/getAllISIText';
  fetch(url, {
    mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
         query{
          data{
            isiTextList{
              items{
                _path
                title
                ISI_Text{
                  html
                }
              }
            }
          }
         }
        `,
    }),
  })
  .then((res) => res.json())
  .then((result) => console.log(result));

}
*/
