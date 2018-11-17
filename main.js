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
        title: 'Food Source',
        body: 'Animals are fed genetically engineered foods such as toxin-maize (corn) which reveals DNA altered fragments in their blood.'
    },
    {
        area: {
            dimensions: { height: '150px', width: '150px' },
            position: { top: '509px', left: '302px' }
        },
        description: {
            dimensions: { height: '280px', width: '250px' },
            position: { top: '235px', left: '370px' }
        },
        title: 'Hooves',
        body: 'Genetically altered animals secrete infected proteins through their feces and urine. As these animals interact with and walk in their habitat, bacteria infects them and mutations occur.'
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
        title: 'Uterus',
        body: 'This is where microinjection occurs (a way to genetically modify the offspring) to produce a “transgenic animal”. Read more on the about page.'
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
        body: 'The milk of an animal holds most of the genetically modified proteins that are produced from changing its genome.'
    },
    {
        area: {
            dimensions: { height: '405px', width: '95px' },
            position: { top: '110px', left: '960px' }
        },
        description: {
            dimensions: { height: '350px', width: '250px' },
            position: { top: '65px', left: '675px' }
        },
        title: 'Hair Fibers and Skin Cells',
        body: 'The growth proteins and influx of hormones in a transgenic animal alter the way their bodies function and produce enzymes. Hair fiber and skin can change in color, texture, and composition as their bodies try to break down these modified materials.'
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
