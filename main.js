(function () {

var hotspots = [
    {
        area: {
            dimensions: { height: '225px', width: '250px' },
            position: { top: 0, left: '70px' }
        },
        description: {
            dimensions: { height: '250px', width: '250px' },
            position: { top: '250px', left: '40px' }
        },
        title: 'Head',
        body: 'This is where the description of the Head goes.'
    },
    {
        area: {
            dimensions: { height: '150px', width: '150px' },
            position: { top: '509px', left: '302px' }
        },
        description: {
            dimensions: { height: '250px', width: '250px' },
            position: { top: '235px', left: '370px' }
        },
        title: 'Foot',
        body: 'This is where the description of the Foot goes.'
    },
    {
        area: {
            dimensions: { height: '150px', width: '310px' },
            position: { top: '165px', left: '485px' }
        },
        description: {
            dimensions: { height: '250px', width: '250px' },
            position: { top: '340px', left: '690px' }
        },
        title: 'Stomach',
        body: 'This is where the description of the Stomach goes.'
    },
    {
        area: {
            dimensions: { height: '150px', width: '165px' },
            position: { top: '325px', left: '690px' }
        },
        description: {
            dimensions: { height: '250px', width: '250px' },
            position: { top: '50px', left: '765px' }
        },
        title: 'Udders',
        body: 'This is where the description of the Udders goes.'
    },
    {
        area: {
            dimensions: { height: '405px', width: '95px' },
            position: { top: '110px', left: '960px' }
        },
        description: {
            dimensions: { height: '250px', width: '250px' },
            position: { top: '65px', left: '675px' }
        },
        title: 'Tail',
        body: 'This is where the description of the Tail goes.'
    }
];

function getElement(dimensions, position) {
    var element = document.createElement('div');

    element.style.height = dimensions.height;
    element.style.width = dimensions.width;
    element.style.top = position.top;
    element.style.left = position.left;

    return element;
}

function getAreaElement(hotspot) {
    var area = getElement(hotspot.area.dimensions, hotspot.area.position);
    area.classList.add('hotspot');

    return area;
}

function getDescriptionElement(hotspot) {
    var description = getElement(hotspot.description.dimensions, hotspot.description.position);
    description.classList.add('hotspot-description');

    var descriptionTitle = document.createElement('div');
    descriptionTitle.classList.add('hotspot-description-title');
    descriptionTitle.innerText = hotspot.title;

    var descriptionBody = document.createElement('div');
    descriptionBody.classList.add('hotspot-description-body');
    descriptionBody.innerText = hotspot.body;

    description.append(descriptionTitle);
    description.append(document.createElement('hr'));
    description.append(descriptionBody);

    return description;
}

function addHotspot(container, hotspot) {
    var area = getAreaElement(hotspot);
    var description = getDescriptionElement(hotspot);

    area.addEventListener('mouseenter', function () {
        description.style.display = 'block';
    });

    area.addEventListener('mouseleave', function () {
        description.style.display = 'none';
    });

    container.append(area);
    container.append(description);
}

function addHotspots() {
    var container = document.getElementById('hotspot-container');

    hotspots.forEach(function (hotspot) {
        addHotspot(container, hotspot);
    });
}

$(document).ready(function () {
    addHotspots();
});

})();
