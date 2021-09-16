// Delete data transaksi by id_transaksi
import axios from 'axios'

const deleteDataKasir = (id, callback) => {
   const isConfirm = confirm('Apakah anda yakin untuk menghapus data transaksi ini ?')
   if ( isConfirm ) {
      axios.get('http://localhost:8080/kasir/delete/id/' + id)
         .then( res => {
            if (res.data.code === 200) callback() 
            else alert('Something wrong, cannot to remove record')
         })
         .catch( err => {
            alert(err)
         })
   }
}

export default deleteDataKasir