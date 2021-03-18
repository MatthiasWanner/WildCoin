const isRatelimited = () => {
	if (lastSwap === void 0) {
		lastSwap = new Date().getTime();
	} else if (new Date().getTime() - lastSwap < ratelimit) {
		console.log(lastSwap);
		return true;
	} else {
		lastSwap = new Date().getTime();
	}

	return false;
};
