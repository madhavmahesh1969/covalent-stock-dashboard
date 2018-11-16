import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { TdMediaService, TdDigitsPipe, TdLayoutManageListComponent, TdRotateAnimation } from '@covalent/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.scss'],
  animations: [
    TdRotateAnimation(),
  ]
})
export class StockDashboardComponent implements AfterViewInit, OnInit {
  @ViewChild('manageList') manageList: TdLayoutManageListComponent;
  @ViewChild('dialogContent') template: TemplateRef<any>;

  selectedItem = Object
  selectedIdx: number
  listOfItems: Array<any>
  portFolioValue: number = 0;

  times: any[];
  timesData: any = {
    'oneDay': [{
      'name': 'Pastry',
      'series': [
        {
          'value': 40,
          'name': '2016-09-15T19:25:07.773Z',
        },
        {
          'value': 10,
          'name': '2016-09-17T17:16:53.279Z',
        },
        {
          'value': 60,
          'name': '2016-09-15T10:34:32.344Z',
        },
        {
          'value': 30,
          'name': '2016-09-19T14:33:45.710Z',
        },
        {
          'value': 50,
          'name': '2016-09-12T18:48:58.925Z',
        }

      ]
    }],
    'oneWeek': [{
      'name': 'Pastry',
      'series': [
        {
          'value': 40,
          'name': '2016-09-15T19:25:07.773Z',
        },
        {
          'value': 10,
          'name': '2016-09-17T17:16:53.279Z',
        },
        {
          'value': 50,
          'name': '2016-09-15T10:34:32.344Z',
        },
        {
          'value': 70,
          'name': '2016-09-19T14:33:45.710Z',
        },
        {
          'value': 5,
          'name': '2016-09-12T18:48:58.925Z',
        }
      ]
    }], 'oneMonth': [{
      'name': 'Pastry',
      'series': [
        {
          'value': 90,
          'name': '2016-09-15T19:25:07.773Z',
        },
        {
          'value': 20,
          'name': '2016-09-17T17:16:53.279Z',
        },
        {
          'value': 65,
          'name': '2016-09-15T10:34:32.344Z',
        },
        {
          'value': 35,
          'name': '2016-09-19T14:33:45.710Z',
        },
        {
          'value': 76,
          'name': '2016-09-12T18:48:58.925Z',
        }
      ]
    }], 'threeMonth': [{
      'name': 'Pastry',
      'series': [
        {
          'value': 90,
          'name': '2016-09-15T19:25:07.773Z',
        },
        {
          'value': 20,
          'name': '2016-09-17T17:16:53.279Z',
        },
        {
          'value': 65,
          'name': '2016-09-15T10:34:32.344Z',
        },
        {
          'value': 35,
          'name': '2016-09-19T14:33:45.710Z',
        },
        {
          'value': 76,
          'name': '2016-09-12T18:48:58.925Z',
        }
      ]
    }], 'oneYear': [{
      'name': 'Pastry',
      'series': [
        {
          'value': 90,
          'name': '2016-09-15T19:25:07.773Z',
        },
        {
          'value': 20,
          'name': '2016-09-17T17:16:53.279Z',
        },
        {
          'value': 65,
          'name': '2016-09-15T10:34:32.344Z',
        },
        {
          'value': 35,
          'name': '2016-09-19T14:33:45.710Z',
        },
        {
          'value': 76,
          'name': '2016-09-12T18:48:58.925Z',
        }
      ]
    }], 'all': [{
      'name': 'Pastry',
      'series': [
        {
          'value': 90,
          'name': '2016-09-15T19:25:07.773Z',
        },
        {
          'value': 20,
          'name': '2016-09-17T17:16:53.279Z',
        },
        {
          'value': 65,
          'name': '2016-09-15T10:34:32.344Z',
        },
        {
          'value': 35,
          'name': '2016-09-19T14:33:45.710Z',
        },
        {
          'value': 76,
          'name': '2016-09-12T18:48:58.925Z',
        }
      ]
    }]
  };

  miniNav: boolean = false;

  ngOnInit() {
    this.selectedIdx = 0;
    this.oneDay();
    this.listOfItems = [
      {
        'title': 'Liberty',
        'price': 'TripAdvisor',
        'value': '$20.39',
        'share': '+37.31%'
      },
      {
        'title': 'NN',
        'price': '57%',
        'value': '$8.24',
        'share': '-33.01%'
      },
      {
        'title': 'Talend',
        'price': '88%',
        'value': '$43.43',
        'share': '-30.95%'
      },
      {
        'title': 'Crocs',
        'price': '29%',
        'value': '$27.29',
        'share': '+27.29%'
      },
      {
        'title': 'Crocs',
        'price': '29%',
        'value': '$27.29',
        'share': '+27.29%'
      },
      {
        'title': 'Crocs',
        'price': '29%',
        'value': '$27.29',
        'share': '+27.29%'
      },
      {
        'title': 'Crocs',
        'price': '29%',
        'value': '$27.29',
        'share': '+27.29%'
      },
      {
        'title': 'Crocs',
        'price': '29%',
        'value': '$27.29',
        'share': '+27.29%'
      }
    ]
  }
  topNews: any[] = [{
    'channelname': 'StreetInsider',
    'companyname': 'GE',
    'sharevalue': '-0.54%',
    'time': '49m',
    'title': 'A 37.05 million block of Genral Electric (GE) crossd the tape at 4:42PM ETat $9/share',
    'content': 'I am a new customer',
    'image': 'assets/download.png',
    'views': '120'
  }, {
    'channelname': 'StreetInsider',
    'companyname': 'GE',
    'sharevalue': '-0.54%',
    'time': '49m',
    'title': 'A 37.05 million block of Genral Electric (GE) crossd the tape at 4:42PM ETat $9/share',
    'content': 'I am a new customer',
    'image': 'assets/download.png',
    'views': '120'
  }, {
    'channelname': 'StreetInsider',
    'companyname': 'GE',
    'sharevalue': '-0.54%',
    'time': '49m',
    'title': 'A 37.05 million block of Genral Electric (GE) crossd the tape at 4:42PM ETat $9/share',
    'content': 'I am a new customer',
    'image': 'assets/download.png',
    'views': '120'
  }];
  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  // Timeframe
  dateFrom: Date = new Date(new Date().getTime() - (2 * 60 * 60 * 24 * 1000));
  dateTo: Date = new Date(new Date().getTime() - (1 * 60 * 60 * 24 * 1000));

  // Dialog
  config = {
    width: '50%',
    height: '50%',
  };

  constructor(public media: TdMediaService,
    public dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _router: Router, ) {
    this.oneDay();
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));


  }


  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  oneDay(): void {
    this.times = this.timesData.oneDay;
    this.total();
  }
  oneWeek(): void {
    this.times = this.timesData.oneWeek;
    this.total();
  }
  oneMonth(): void {
    this.times = this.timesData.oneMonth;
    this.total();
  }
  threeMonth(): void {
    this.times = this.timesData.threeMonth;
    this.total();
  }
  oneYear(): void {
    this.times = this.timesData.oneYear;
    this.total();
  }
  all(): void {
    this.times = this.timesData.all;
    this.total();
  }

  total(): void {
    this.portFolioValue = 0;
    this.times[0].series.forEach(element => {
      this.portFolioValue = this.portFolioValue + Number(element.value);
    });
  }
}
