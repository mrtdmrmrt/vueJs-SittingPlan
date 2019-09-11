window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import axios from "axios"
//var baseURL="http://avengersacc01:3535";
//  src/api/sittingPlanData.json a axios kullanarak data ya get isteği yağıldığı yer
export const dataMixin = {
    data(){
        return {
            baseURL:"http://avengersacc01:3535"
        }
    },
    methods : {
        getSittingPlanFloorData (){
            //return axios.get("/src/api/sittingPlanData.json");
            return axios.get(this.baseURL+"/api/Floor/Get");
        },
        getSittingPlanDeskData (){
            return axios.get(this.baseURL+"/api/Desk/Get");
        },
        getSittingPlanChairData (){
            return axios.get(this.baseURL+"/api/Chair/Get");
        },
        getSittingPlanPersonData (){
            return axios.get(this.baseURL+"/api/Chair/Get");
        },
        postSittingPlanFloorData (){
            axios.post(this.baseURL+"/api/Floor/Post");
        },
    }
    
    /*data(){
        return {
            componentsLists :[]
        }
        
    },
    */
   /*
    created() {
			this.getComponentConfig()
			.then(response => {
			
				this.componentsLists = response.data;
			})
		} */
    
}