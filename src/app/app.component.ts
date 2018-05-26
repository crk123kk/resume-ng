import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  connectMe(){
    if (Notification['permission'] == "granted") {
      var notification = new Notification("resume", {
          body: '可以有一个机会深入交流吗?',
          icon: 'assets/image/20.jpg'
      });
      var text = document.querySelector('#text');
      notification.onclick = function() {
          text.innerHTML = 'crk已于' + new Date().toTimeString().split(' ')[0] + '申请工作职位';
          notification.close();    
      };
      setTimeout(function(){
        notification.close(); 
      },5000);
    }else {
      alert('email: 1973657048@qq.com');
    }  
  }
}
