
     const EventHandling = {
        data() {
          return {
            message: ''
         
          }
        },
        methods: {
          calcAverage() {
            this.message = " "+(Number(lct.value) + Number(cht.value) + Number(cnt.value) + Number(mt.value) + Number(red.value))/5 ;
            this.messagen = " "+ ((Number(lct.value) * Number(p1.value)) + (Number(cht.value) * Number(p2.value)) + (Number(cnt.value) * Number(p3.value)) + (Number(mt.value) * Number(p4.value))+(Number(red.value) * Number(p5.value)))/(Number(p1.value) + Number(p2.value) + Number(p3.value) + Number(p4.value) + Number(p5.value));
          }
        }
      }
      Vue.createApp(EventHandling).mount('#event-handling')
     