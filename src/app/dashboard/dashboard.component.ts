import { Component, ChangeDetectorRef, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { TdMediaService, TdDigitsPipe, TdLayoutManageListComponent, TdRotateAnimation } from '@covalent/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('manageList') manageList: TdLayoutManageListComponent;
  @ViewChild('dialogContent') template: TemplateRef<any>;
	more: boolean;
  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  notification: any[] = [{
    'title': 'VIIX Purchased',
    'subTitle': 'You bought 6 shares of VIIX at %11.88.'
  }, {
    'title': 'CAPR Sold',
    'subTitle': 'You sold 38 shares of CAPR at $1.80'
  }, {
    'title': 'CAPR Purhased',
    'subTitle': 'You bought 38 shares of CAPR at %1.95.'
  }, {
    'title': 'CAPR Sold',
    'subTitle': 'You sold 35 shares of CAPR at $2.09'
  }];
  account: any[] = [
    {
      'iconName': 'Robinhood Gold',
      'icon': 'account_box'
    }, {
      'iconName': 'Free stocks',
      'icon': 'account_balance_wallet'
    }, {
      'iconName': 'Account',
      'icon': 'account_circle'
    }, {
      'iconName': 'Banking',
      'icon': 'account_balance'
    }, {
      'iconName': 'History',
      'icon': 'history'
    }, {
      'iconName': 'Settings',
      'icon': 'settings'
    }, {
      'iconName': 'Help',
      'icon': 'help'
    }, {
      'iconName': 'Disclosures',
      'icon': 'subject'
    }, {
      'iconName': 'Log Out',
      'icon': 'arrow_forward'
    }
  ];

  constructor(public media: TdMediaService,
    public dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _router: Router, ) {

    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));

  }


  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  sdb(): void {
    setTimeout(() => {
      this._router.navigate(['/dashboardComponent/stockDashboardComponent']);
    }, 500);
  }

  admin(): void {
    setTimeout(() => {
      this._router.navigate(['/dashboardComponent/admin']);
    }, 500);
  }
}
