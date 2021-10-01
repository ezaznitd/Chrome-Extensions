window.addEventListener('load', function load() {
    var details = document.getElementById("details").children;

    const youtubeKey = 'AIzaSyAyDuEWo-W251FSR5nVSQiDyuk0aHohp1M';
    const youtubeUser = 'UCNjwQegri0MrNW3amjbaflA';

    let getSubscribers = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data["items"]);
            details[0].innerHTML = 'Subscribers: ' + data["items"][0].statistics.subscriberCount;
            details[1].innerHTML = 'Total Videos: ' + data["items"][0].statistics.videoCount;
            details[2].innerHTML = 'Total Views: ' + data["items"][0].statistics.viewCount;
        })

    }

    getSubscribers();
})