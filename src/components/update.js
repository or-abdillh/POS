//Update data by id_transaksi

import axios from 'axios'

const updateData = {
   kasir: (form, event, btn) => {
      axios.post('http://localhost:8080/kasir/update', form)
         .then( res => {
            if ( res.data.code === 200 ) {
               setTimeout(() => {
                  btn.innerHTML = 'Update'
                  event('close_modal')
                  event('update_success')
               }, 500)
            }
            else console.log(res.data.results)
         })
         .catch(err => alert(err))
   }
}

export default updateData