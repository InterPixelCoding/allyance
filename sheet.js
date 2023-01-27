const timelineItems = new Map();

// Replace SPREADSHEET_ID with the actual ID of your spreadsheet
const SPREADSHEET_ID = '1PJwtsU8eLYEMoOMvMEDL4MYZ0Y7HrPBhqe_laP0bucU';

// Replace API_KEY with your actual API key
const API_KEY = 'AIzaSyDO2ky79cQiocU6iTIGMoMFtyknylIb_iM';

// Fetch data from the Google Sheets API
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values:batchGet?ranges=Sheet1&key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const columns = data.valueRanges[0].values;
    columns.shift();
    // Iterate over each column and create a new timeline item
    for(let i=0; i<columns.length; i++) {
      // Create a new timeline item
      const newTimelineItem = document.createElement('div');
      newTimelineItem.classList.add('timeline-item');

      // Create a new span element for the location
      const Title = document.createElement('h1');
      Title.textContent = columns[i][0];
      newTimelineItem.appendChild(Title);

      // Create a new span element for the date
      const dateSpan = document.createElement('span');
      dateSpan.textContent = columns[i][1];
      dateSpan.classList.add('date')
      newTimelineItem.appendChild(dateSpan);

      // Create a new span element for the location
      const locationSpan = document.createElement('span');
      locationSpan.textContent = columns[i][2];
      locationSpan.classList.add('location')
      newTimelineItem.appendChild(locationSpan);

      // Create a new span element for the summary
      const summarySpan = document.createElement('p');
      summarySpan.textContent = `Aim: ${columns[i][3]}`;
      newTimelineItem.appendChild(summarySpan);

      // Create a button to load pdf in iframe
      if(columns[i][5]!= null) {
        const iframeButton = document.createElement('button');
        const iframe = document.querySelector('.pdfView');
        const iframeContainer = document.querySelector('.pdf-container');
        const closebtn = document.querySelector('.close-btn');
        const downloadButton = document.querySelector('.download-btn')
        iframeButton.textContent = "View Full Event"
          iframeButton.addEventListener("click", function () {
            iframeContainer.classList.add('open')
            iframe.src = `./resources/${columns[i][5]}.pdf#view=Fit&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0`;
            downloadButton.href =  `./resources/${columns[i][5]}.pdf`;
            downloadButton.download = `${columns[i][5]}.pdf`;
          })

        closebtn.addEventListener("click", function() {
          iframeContainer.classList.remove('open')
        })
        newTimelineItem.appendChild(iframeButton)
      }
      // Add the new timeline item to the map
      timelineItems.set(newTimelineItem, dateSpan.textContent);
    }
    // Create a new timeline item for today
    const today = document.createElement('div');
    today.classList.add('timeline-item');

    const todaySpan = document.createElement('h1');
    const todayDate = new Date();
    todaySpan.textContent = `Today, ${todayDate.toLocaleDateString("en-uk", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    })}`;
    today.appendChild(todaySpan);
    todaySpan.setAttribute('id', 'today');
    todaySpan.classList.add('today');
    timelineItems.set(today, todaySpan.textContent);

    // Sort the timeline items by date
    const sortedTimelineItems = Array.from(timelineItems.entries()).sort((a, b) => new Date(a[1]) - new Date(b[1]));

    // Get the timeline container
    const timeline = document.querySelector('.timeline');

    // Remove all the current timeline items from the container
    while (timeline.firstChild) {
        timeline.removeChild(timeline.firstChild);
    }

    const skip = document.createElement('div');
    const skipAnchor = document.createElement('a');
    skip.appendChild(skipAnchor);
    skip.classList.add('timeline-item');
    skipAnchor.textContent = "Skip to present";

    skipAnchor.href = '#today';

    timeline.appendChild(skip);

    // Append the sorted timeline items to the container
    sortedTimelineItems.forEach(function(item) {
        timeline.appendChild(item[0]);
    });

  })







  

