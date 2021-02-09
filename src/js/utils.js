exports.createImages = (src, alt, title) => {
	const img = new Image();
	img.src = src;
	if (alt != null) img.alt = alt;
	if (title != null) img.title = title;
	return img;
};
