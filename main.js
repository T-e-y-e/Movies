var vm = new Vue({
    el: "#app",

    data: {
        movies: [],
        details: false,
        home: true
    },

    methods: {
        getMovies(){
          axios.get("https://api.artic.edu/api/v1/artworks")
            .then((response) => {
                this.movies = (response.data.data);
                
                
            })
        },


        convertTime(time){
             return  moment(time).format(" MMMM Do YYYY");
            },

             moreDetails(){
                this.home = false;
                this.details = true
                },
             

            close(){
                this.details = false;
                this.home = true
            }
    },

    mounted(){
        this.getMovies();
        
    },
  
  
})

