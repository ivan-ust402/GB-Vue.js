export default {
    state() {
        return {
            projectContent: [
                {
                    title: 'Minimal Look Bedrooms',
                    htmlText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                    <br><br>
                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    imgSrcArr: [
                        'img/project-details/0.jpg',
                        'img/project-details/1.1.jpg',
                        'img/project-details/2.2.jpg',
                        'img/project-details/3.3.jpg',
                        'img/project-details/4.4.jpg',
                        'img/project-details/5.5.jpg',
                        'img/project-details/6.6.jpg',
                        'img/project-details/7.7.jpg',                          
                    ]
                }
            ],
        }
    },
    mutations: {

    },
    getters: {
        getTitle(state) {
            return state.projectContent[0].title;
        },
        getHTMLText(state) {
            return state.projectContent[0].htmlText;
        },
        getImgSrcArr(state) {
            return state.projectContent[0].imgSrcArr;
        },
    },
    actions: {

    }
};