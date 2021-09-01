var ImagesView = function (_a) {
    var imageDatas = _a.imageDatas, imageWidth = _a.imageWidth;
    return (React.createElement(React.Fragment, null, imageDatas.length > 0 &&
        React.createElement("div", { id: "Images", style: { display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: 'wrap', margin: '1%', padding: '1%' } }, imageDatas.map(function (imageData, index) {
            return (imageData.length > 10 && React.createElement("img", { key: index, src: imageData, width: imageWidth, alt: 'NoImage' }));
        }))));
};
