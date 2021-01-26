import { Component, OnInit, OnDestroy,NgModule } from "@angular/core";
import { MnsService } from './mns.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'msn-cards';

companyName : string = "";
cardHolderName : string = "";
designation : string = "";
companyLogo : string = "";
phoneNumber : string = "";
whatsAppNumber : string = "";
alternateNo : string = "";
address : string = "";
email : string = "";
website : string = "";
mapLocation : string = "";
facebookLink : string = "";
instaLink : string = "";
twitterLink : string = "";
linkedInLink : string = "";
youtubeLink : string = "";
estYear : string = "";
natureOfBusiness : string = "";
views : string = "";
businessInfo : string = ""
galleryImageArray:any;
productImageArray:any;
cardData:any;
userNumber:any;
coookieName: string="company";
router:any;
userId:any;
html:any="";
loading:boolean=true;

  constructor(private mnsService : MnsService,private route: ActivatedRoute    ) {}

  ngOnInit() {


      this.route.queryParams.subscribe(params => {
  if(this.route.snapshot)
        this.userId=this.route.snapshot.queryParamMap.get('company');
        if(this.userId){
          this.coookieName="company";
          this.createCookie(this.coookieName,this.userId,1);
          this.getCardData(this.userId);
        }else{
          this.userId=this.readCookie(this.coookieName);
          if(this.userId){
            this.getCardData(this.userId);


          }
        }


      });


    }
getCardData(userId:any){
this.loading=true;
  this.mnsService.getCardData(this.userId).subscribe(data => {
    this.loading = false;
    this.companyName = data.companyName;
    this.cardHolderName = data.cardHolderName;
    this.designation = data.designation;
    this.companyLogo = data.companyLogo;
    this.natureOfBusiness = data.natureOfBusiness;
    this.estYear = data.estYear;
    this.phoneNumber  = data.phonenumber;
    this.whatsAppNumber = data.whatsAppNumber;
    this.alternateNo  = data.alternateNumber;
    this.address = data.address;
    this.email = data.emailId;
    this.website = data.website;
    this.mapLocation = data.mapLocation;
    this.facebookLink = data.facebookLocation;
    this.instaLink = data.instaLocation;
    this.twitterLink = data.twitterLocation;
    this.linkedInLink = data.linkedInLocation;
    this.youtubeLink = data.youtubeLocation;
    this.views = data.likes;
    this.businessInfo = data.businessInfo;
    this.galleryImageArray = data.galleryImages;
    this.productImageArray = data.productImages;
    this.html = data.businessInfo;
});

  // this.companyName = "LOOK'IN UNISEX SALON";
  // // cardHolderName : string = "";
  // // disignation : string = "";
  // this.natureOfBusiness="Unisex Salon";
  // this.estYear="2020";
  // this.phoneNumber  = "8010626928";
  // this.whatsAppNumber="918010626928";
  // this.alternateNo  = "9588419501";
  // this.address = "Shop no 2 Nandadeep Society, Chatrapati Chowk Rd, Kaspate Wasti, Wakad, Pimpri-Chinchwad, 411057";
  // this.email ="lookinsaloon@gmail.com";
  // // website : string = "";
  // this.mapLocation = "https://maps.app.goo.gl/eQUemGMn9yQdFRsV6";
  // this.facebookLink = "https://www.facebook.com/lookinsaloon";
  // this.instaLink ="https://www.instagram.com/Lookinsaloon/";
  // // twitterLink : string = "";
  // // linkedInLink : string = "";
  // // youtubeLink : string = "";
  // this.galleryImageArray=["WhatsAppImage2020-12-08at9.02.48PM(1).jpeg","WhatsAppImage2020-12-08at9.02.48PM.jpeg","WhatsAppImage2020-12-08at9.02.47PM.jpeg","WhatsAppImage2020-12-08at9.02.46PM(1).jpeg","WhatsAppImage2020-12-08at9.02.46PM.jpeg","WhatsAppImage2020-12-08at9.02.49PM(1).jpeg","WhatsAppImage2020-12-08at9.02.49PM(2).jpeg","WhatsAppImage2020-12-08at9.02.49PM.jpeg","WhatsAppImage2020-12-08at9.02.50PM(1).jpeg","WhatsAppImage2020-12-08at9.02.50PM.jpeg","WhatsAppImage2020-12-08at9.02.51PM(1).jpeg","WhatsAppImage2020-12-08at9.02.51PM.jpeg","WhatsAppImage2020-12-08at9.02.52PM.jpeg","WhatsAppImage2020-12-08at9.02.53PM.jpeg","WhatsAppImage2020-12-08at9.03.14PM.jpeg","89f4034e-91f3-4cfb-84af-c3a3b4b62e28.jpg","0af1152f-dc34-49f7-8bca-1b70d0d98964.jpg","21974741-ec88-4db0-952e-a82c01718899.jpg","dc7f82b4-37fc-4614-b9ac-c2577edb079d.jpg","28475152-534a-46a6-8e35-beceb0da2c5a.jpg"];
  // this.productImageArray=["WhatsAppImage2020-12-29at9.20.34PM.jpeg","WhatsAppImage2020-12-29at9.20.33PM.jpeg","WhatsAppImage2020-12-29at9.20.33PM(1).jpeg","WhatsAppImage2020-12-29at9.20.32PM.jpeg","WhatsAppImage2020-12-29at9.20.31PM(1).jpeg","WhatsAppImage2020-12-29at9.20.30PM.jpeg","WhatsAppImage2020-12-29at9.20.29PM.jpeg","WhatsAppImage2020-12-29at9.20.29PM(1).jpeg","WhatsAppImage2020-12-29at9.20.29PM(1).jpeg", "WhatsAppImage2020-12-29at9.20.28PM.jpeg","WhatsAppImage2020-12-29at9.20.23PM.jpeg","IMG-20210101-WA0031.jpg"];
}

handleWhatsappShare(clientNumber: any){
  window.open("https://wa.me/91"+clientNumber+"?text=Got%20reference%20from%20your%20Digital%20vCard.%20Want%20to%20know%20more%20about%20your%20products%20and%20services");
}

createCookie(name: string, value: string, days: number) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
readCookie(name: string) {
  debugger;
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
eraseCookie(name: string) {
  this.createCookie(name, "", -1);
}
  ngOnDestroy() {
    this.eraseCookie(this.coookieName);
  }
}
