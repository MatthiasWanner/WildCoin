let currentIndex = 0;
// In ms
const ratelimit = 800;
let lastSwap;

/**
 * Refresh the current index
 * @param {number} newIndex - Index to go to
 */
const updateIndex = newIndex => {
	currentIndex = newIndex;

	return newIndex;
};

/**
 * The list of articles found on the web
 * @type {[{videos: [{date: string, image: string, link: string, title: string, desc: string, tags: string[]}, {date: string, image: string, link: string, title: string, desc: string, tags: string[]}]}, {videos: [{date: string, image: string, link: string, title: string, desc: string, tags: string[]}, {date: string, image: string, link: string, title: string, desc: string, tags: string[]}]}, {videos: [{date: string, image: string, link: string, title: string, desc: string, tags: string[]}, {date: string, image: string, link: string, title: string, desc: string, tags: string[]}]}]}
 */
const articlesList = [
	{
		videos: [
			{
				image: 'assets/img/video_bitcoin.jpg',
				title: '2020',
				link: 'https://thisisyoutube.com',
				date: '01 / 01 / 2021',
				desc: 'Bitcoin is boomer',
				tags: [
					'bitcoin',
					'boom'
				]
			},
			{
				image: 'assets/img/video_bitcoin.jpg',
				title: '2021',
				link: 'https://thisisyoutube.com',
				date: '01 / 01 / 2021',
				desc: 'Bitcoin is boomer',
				tags: [
					'bitcoin',
					'boom'
				]
			}
		]
	},
	{
		videos: [
			{
				image: 'assets/img/video_bitcoin.jpg',
				title: '2022',
				link: 'https://thisisyoutube.com',
				date: '01 / 01 / 2021',
				desc: 'Bitcoin is boomer',
				tags: [
					'bitcoin',
					'boom'
				]
			},
			{
				image: 'assets/img/video_bitcoin.jpg',
				title: '2023',
				link: 'https://thisisyoutube.com',
				date: '01 / 01 / 2021',
				desc: 'Bitcoin is boomer',
				tags: [
					'bitcoin',
					'boom'
				]
			}
		]
	},
	{
		videos: [
			{
				image: 'assets/img/video_bitcoin.jpg',
				title: '2024',
				link: 'https://thisisyoutube.com',
				date: '01 / 01 / 2024',
				desc: 'Bitcoin is boomer',
				tags: [
					'bitcoin',
					'boom'
				]
			},
			{
				image: 'assets/img/video_bitcoin.jpg',
				title: '2025',
				link: 'https://thisisyoutube.com',
				date: '01 / 01 / 2025',
				desc: 'Bitcoin is boomer',
				tags: [
					'bitcoin',
					'boom'
				]
			}
		]
	}
];
