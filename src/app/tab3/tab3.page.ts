import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
public nama_lengkap:any="";
public jenis_kelamin:any="";
public no_hp:any="";
public email:any="";
public asal_sekolah:any="";
public prodi:any="";
public jenjang_studi:any="";
public kelas:any="";
public info_kampus:any="";
  constructor(public toas:ToastController) {}
async addData () {
  const fd= new FormData();
  
  fd.append('nama_lengkap',this.nama_lengkap);
  fd.append('jenis_kelamin',this.jenis_kelamin);
  fd.append('no_hp',this.no_hp);
  fd.append('email',this.email);
  fd.append('asal_sekolah',this.asal_sekolah);
  fd.append('prodi',this.prodi);
  fd.append('jenjang_studi',this.jenjang_studi);
  fd.append('kelas',this.kelas);
  fd.append('info_kampus',this.info_kampus);

  if(this.nama_lengkap === "" || this.jenis_kelamin === ""|| this.no_hp === ""|| this.email === ""|| this.asal_sekolah === ""|| this.prodi === ""|| this.jenjang_studi === ""|| this.kelas === ""|| this.info_kampus === ""){
    const toast = await this.toas.create({
      message : 'Lengkapi Data Pendaftaran',
      duration : 2000,
      color:'danger'
    });
    toast.present();
    
  }else{
    try{
      //lokal
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api_Muhammad%20Awaludin%20Jamil/tambah_pendaftaran.php', fd);
      //cpanel
      // const res = await axios.post('https://praktikum-cpanel-unbin.com/api_anga/tambah_pendaftaran.php', fd);
      console.log(res.data);
  
      if(res.data.error == false){
        const toast = await this.toas.create({
          message : 'Data berhasil ditambahkan',
          duration : 2000,
          color:'success'
        });
        toast.present();
        this.nama_lengkap = "";
        this.jenis_kelamin = "";
        this.no_hp = "";
        this.email = "";
        this.asal_sekolah = "";
        this.prodi = "";
        this.jenjang_studi = "";
        this.kelas = "";
        this.info_kampus = "";
      }else{
        const toast = await this.toas.create({
          message : 'Data gagal ditambahkan',
          duration : 2000,
          color:'danger'
      });
      toast.present();
    }

  }catch(err){
    console.log(err);
  }
  }

}
}