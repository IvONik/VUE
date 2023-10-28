import { createStore } from "vuex";

export default createStore({
    state:{
        title: 'Minimal Look Bedrooms',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        homeUrl: '/',
    },// данные
    gerrers:{},   // работа с данными, всегда имеют return
    mutations:{}, // методы-методы 
    actions:{}, // работа с событиями на клиентской стороне или прием данных с сервера
    modules:{} // можно использовать для хранения данных в отдельной папочке, а здесь их уже собрать
})