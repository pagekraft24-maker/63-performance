// src/mocks/vehicleConfigurator.ts
// Comprehensive vehicle database for the configurator

export interface TuningData {
  ps: number;
  nm: number;
  stage1Ps: number;
  stage1Nm: number;
  stage2Ps?: number;
  stage2Nm?: number;
}

export interface Engine {
  id: string;
  name: string;
  displacement: string;
  fuelType: string;
  tuning: TuningData;
}

export interface Generation {
  id: string;
  name: string;
  years: string;
  engines: Engine[];
}

export interface Model {
  id: string;
  name: string;
  generations: Generation[];
}

export interface Brand {
  id: string;
  name: string;
  models: Model[];
}

export const vehicleBrands: Brand[] = [
  {
    id: 'audi',
    name: 'Audi',
    models: [
      {
        id: 'a3',
        name: 'A3',
        generations: [
          {
            id: 'a3-8y',
            name: '8Y (2020 – heute)',
            years: '2020 – heute',
            engines: [
              { id: 'a3-8y-35tfsi', name: '35 TFSI', displacement: '1.5L', fuelType: 'Benzin', tuning: { ps: 150, nm: 250, stage1Ps: 190, stage1Nm: 320 } },
              { id: 'a3-8y-40tfsi', name: '40 TFSI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 190, nm: 320, stage1Ps: 245, stage1Nm: 420 } },
            ],
          },
          {
            id: 'a3-rs3',
            name: 'RS3 8Y (2021 – heute)',
            years: '2021 – heute',
            engines: [
              { id: 'rs3-8y-25tfsi', name: '2.5 TFSI', displacement: '2.5L', fuelType: 'Benzin', tuning: { ps: 400, nm: 500, stage1Ps: 480, stage1Nm: 620, stage2Ps: 520, stage2Nm: 680 } },
            ],
          },
        ],
      },
      {
        id: 'a4',
        name: 'A4',
        generations: [
          {
            id: 'a4-b9',
            name: 'B9 (2015 – 2023)',
            years: '2015 – 2023',
            engines: [
              { id: 'a4-b9-40tfsi', name: '40 TFSI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 190, nm: 320, stage1Ps: 245, stage1Nm: 420 } },
              { id: 'a4-b9-45tfsi', name: '45 TFSI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 245, nm: 370, stage1Ps: 300, stage1Nm: 480 } },
            ],
          },
        ],
      },
      {
        id: 'a5',
        name: 'A5',
        generations: [
          {
            id: 'a5-f5',
            name: 'F5 (2016 – 2024)',
            years: '2016 – 2024',
            engines: [
              { id: 'a5-f5-40tfsi', name: '40 TFSI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 190, nm: 320, stage1Ps: 245, stage1Nm: 420 } },
            ],
          },
        ],
      },
      {
        id: 'rs-q3',
        name: 'RS Q3',
        generations: [
          {
            id: 'rsq3-f3',
            name: 'F3 (2019 – heute)',
            years: '2019 – heute',
            engines: [
              { id: 'rsq3-f3-25tfsi', name: '2.5 TFSI', displacement: '2.5L', fuelType: 'Benzin', tuning: { ps: 400, nm: 480, stage1Ps: 470, stage1Nm: 600, stage2Ps: 510, stage2Nm: 650 } },
            ],
          },
        ],
      },
      {
        id: 'tt',
        name: 'TT',
        generations: [
          {
            id: 'tt-fv',
            name: 'FV (2014 – 2023)',
            years: '2014 – 2023',
            engines: [
              { id: 'tt-fv-45tfsi', name: '45 TFSI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 230, nm: 370, stage1Ps: 290, stage1Nm: 450 } },
              { id: 'tt-fv-ttrs', name: 'TT RS', displacement: '2.5L', fuelType: 'Benzin', tuning: { ps: 400, nm: 480, stage1Ps: 480, stage1Nm: 620, stage2Ps: 520, stage2Nm: 680 } },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bmw',
    name: 'BMW',
    models: [
      {
        id: '1er',
        name: '1er',
        generations: [
          {
            id: '1er-f40',
            name: 'F40 (2019 – heute)',
            years: '2019 – heute',
            engines: [
              { id: '1er-f40-118i', name: '118i', displacement: '1.5L', fuelType: 'Benzin', tuning: { ps: 140, nm: 220, stage1Ps: 180, stage1Nm: 300 } },
              { id: '1er-f40-m135i', name: 'M135i xDrive', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 306, nm: 450, stage1Ps: 370, stage1Nm: 550, stage2Ps: 410, stage2Nm: 600 } },
            ],
          },
        ],
      },
      {
        id: '2er',
        name: '2er',
        generations: [
          {
            id: '2er-g42',
            name: 'G42 (2021 – heute)',
            years: '2021 – heute',
            engines: [
              { id: '2er-g42-m240i', name: 'M240i xDrive', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 374, nm: 500, stage1Ps: 440, stage1Nm: 620, stage2Ps: 480, stage2Nm: 680 } },
            ],
          },
        ],
      },
      {
        id: '3er',
        name: '3er',
        generations: [
          {
            id: '3er-g20',
            name: 'G20 / G21 (2018 – heute)',
            years: '2018 – heute',
            engines: [
              { id: '3er-g20-330i', name: '330i', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 258, nm: 400, stage1Ps: 320, stage1Nm: 500 } },
              { id: '3er-g20-m340i', name: 'M340i xDrive', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 374, nm: 500, stage1Ps: 440, stage1Nm: 620, stage2Ps: 480, stage2Nm: 680 } },
              { id: '3er-g20-320d', name: '320d', displacement: '2.0L', fuelType: 'Diesel', tuning: { ps: 190, nm: 400, stage1Ps: 230, stage1Nm: 480 } },
            ],
          },
        ],
      },
      {
        id: '4er',
        name: '4er',
        generations: [
          {
            id: '4er-g22',
            name: 'G22 / G23 (2020 – heute)',
            years: '2020 – heute',
            engines: [
              { id: '4er-g22-430i', name: '430i', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 258, nm: 400, stage1Ps: 320, stage1Nm: 500 } },
              { id: '4er-g22-m440i', name: 'M440i xDrive', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 374, nm: 500, stage1Ps: 440, stage1Nm: 620, stage2Ps: 480, stage2Nm: 680 } },
            ],
          },
        ],
      },
      {
        id: '5er',
        name: '5er',
        generations: [
          {
            id: '5er-g30',
            name: 'G30 / G31 (2017 – 2023)',
            years: '2017 – 2023',
            engines: [
              { id: '5er-g30-530i', name: '530i', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 252, nm: 350, stage1Ps: 310, stage1Nm: 450 } },
              { id: '5er-g30-540i', name: '540i xDrive', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 340, nm: 450, stage1Ps: 400, stage1Nm: 560, stage2Ps: 440, stage2Nm: 620 } },
              { id: '5er-g30-m550i', name: 'M550i xDrive', displacement: '4.4L V8', fuelType: 'Benzin', tuning: { ps: 530, nm: 750, stage1Ps: 620, stage1Nm: 850, stage2Ps: 680, stage2Nm: 920 } },
            ],
          },
        ],
      },
      {
        id: 'm2',
        name: 'M2',
        generations: [
          {
            id: 'm2-g87',
            name: 'G87 (2022 – heute)',
            years: '2022 – heute',
            engines: [
              { id: 'm2-g87-s58', name: 'S58 3.0L', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 460, nm: 550, stage1Ps: 540, stage1Nm: 680, stage2Ps: 600, stage2Nm: 750 } },
            ],
          },
          {
            id: 'm2-f87',
            name: 'F87 (2015 – 2021)',
            years: '2015 – 2021',
            engines: [
              { id: 'm2-f87-n55', name: 'N55 3.0L', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 370, nm: 465, stage1Ps: 430, stage1Nm: 580, stage2Ps: 470, stage2Nm: 640 } },
              { id: 'm2-f87-s55cs', name: 'S55 Competition', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 410, nm: 550, stage1Ps: 480, stage1Nm: 650, stage2Ps: 520, stage2Nm: 720 } },
            ],
          },
        ],
      },
      {
        id: 'm3',
        name: 'M3',
        generations: [
          {
            id: 'm3-g80',
            name: 'G80 / G81 (2020 – heute)',
            years: '2020 – heute',
            engines: [
              { id: 'm3-g80-s58', name: 'S58 3.0L', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 480, nm: 550, stage1Ps: 560, stage1Nm: 680, stage2Ps: 620, stage2Nm: 750 } },
              { id: 'm3-g80-s58cs', name: 'S58 Competition', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 510, nm: 650, stage1Ps: 590, stage1Nm: 750, stage2Ps: 650, stage2Nm: 820 } },
            ],
          },
        ],
      },
      {
        id: 'm4',
        name: 'M4',
        generations: [
          {
            id: 'm4-g82',
            name: 'G82 / G83 (2020 – heute)',
            years: '2020 – heute',
            engines: [
              { id: 'm4-g82-s58', name: 'S58 3.0L', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 480, nm: 550, stage1Ps: 560, stage1Nm: 680, stage2Ps: 620, stage2Nm: 750 } },
              { id: 'm4-g82-s58cs', name: 'S58 Competition', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 510, nm: 650, stage1Ps: 590, stage1Nm: 750, stage2Ps: 650, stage2Nm: 820 } },
            ],
          },
        ],
      },
      {
        id: 'm5',
        name: 'M5',
        generations: [
          {
            id: 'm5-f90',
            name: 'F90 (2017 – 2023)',
            years: '2017 – 2023',
            engines: [
              { id: 'm5-f90-s63', name: 'S63 4.4L V8', displacement: '4.4L V8', fuelType: 'Benzin', tuning: { ps: 600, nm: 750, stage1Ps: 700, stage1Nm: 900, stage2Ps: 780, stage2Nm: 1000 } },
              { id: 'm5-f90-s63cs', name: 'S63 Competition', displacement: '4.4L V8', fuelType: 'Benzin', tuning: { ps: 625, nm: 750, stage1Ps: 720, stage1Nm: 920, stage2Ps: 800, stage2Nm: 1020 } },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    models: [
      {
        id: 'a-klasse',
        name: 'A-Klasse',
        generations: [
          {
            id: 'a-w177',
            name: 'W177 (2018 – heute)',
            years: '2018 – heute',
            engines: [
              { id: 'a-w177-a200', name: 'A 200', displacement: '1.3L', fuelType: 'Benzin', tuning: { ps: 163, nm: 250, stage1Ps: 200, stage1Nm: 320 } },
              { id: 'a-w177-a250', name: 'A 250', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 224, nm: 350, stage1Ps: 280, stage1Nm: 450 } },
              { id: 'a-w177-a35', name: 'AMG A 35', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 306, nm: 400, stage1Ps: 360, stage1Nm: 500, stage2Ps: 390, stage2Nm: 550 } },
              { id: 'a-w177-a45s', name: 'AMG A 45 S', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 421, nm: 500, stage1Ps: 480, stage1Nm: 600, stage2Ps: 520, stage2Nm: 650 } },
            ],
          },
        ],
      },
      {
        id: 'c-klasse',
        name: 'C-Klasse',
        generations: [
          {
            id: 'c-w206',
            name: 'W206 (2021 – heute)',
            years: '2021 – heute',
            engines: [
              { id: 'c-w206-c200', name: 'C 200', displacement: '1.5L', fuelType: 'Benzin', tuning: { ps: 204, nm: 300, stage1Ps: 250, stage1Nm: 380 } },
              { id: 'c-w206-c300', name: 'C 300', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 258, nm: 400, stage1Ps: 310, stage1Nm: 500 } },
            ],
          },
          {
            id: 'c-w205',
            name: 'W205 (2014 – 2021)',
            years: '2014 – 2021',
            engines: [
              { id: 'c-w205-c200', name: 'C 200', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 184, nm: 300, stage1Ps: 230, stage1Nm: 380 } },
              { id: 'c-w205-c43', name: 'AMG C 43', displacement: '3.0L V6', fuelType: 'Benzin', tuning: { ps: 362, nm: 384, stage1Ps: 420, stage1Nm: 480, stage2Ps: 450, stage2Nm: 540 } },
              { id: 'c-w205-c63s', name: 'AMG C 63 S', displacement: '4.0L V8', fuelType: 'Benzin', tuning: { ps: 510, nm: 700, stage1Ps: 590, stage1Nm: 820, stage2Ps: 650, stage2Nm: 900 } },
            ],
          },
        ],
      },
      {
        id: 'e-klasse',
        name: 'E-Klasse',
        generations: [
          {
            id: 'e-w213',
            name: 'W213 (2016 – 2023)',
            years: '2016 – 2023',
            engines: [
              { id: 'e-w213-e300', name: 'E 300', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 258, nm: 370, stage1Ps: 310, stage1Nm: 470 } },
              { id: 'e-w213-e53', name: 'AMG E 53', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 435, nm: 520, stage1Ps: 500, stage1Nm: 620, stage2Ps: 540, stage2Nm: 680 } },
              { id: 'e-w213-e63s', name: 'AMG E 63 S', displacement: '4.0L V8', fuelType: 'Benzin', tuning: { ps: 612, nm: 850, stage1Ps: 700, stage1Nm: 1000, stage2Ps: 780, stage2Nm: 1100 } },
            ],
          },
        ],
      },
      {
        id: 'gle',
        name: 'GLE',
        generations: [
          {
            id: 'gle-w167',
            name: 'W167 (2019 – heute)',
            years: '2019 – heute',
            engines: [
              { id: 'gle-w167-450', name: 'GLE 450', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 367, nm: 500, stage1Ps: 430, stage1Nm: 620 } },
              { id: 'gle-w167-53', name: 'AMG GLE 53', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 435, nm: 520, stage1Ps: 500, stage1Nm: 620, stage2Ps: 540, stage2Nm: 680 } },
              { id: 'gle-w167-63s', name: 'AMG GLE 63 S', displacement: '4.0L V8', fuelType: 'Benzin', tuning: { ps: 612, nm: 850, stage1Ps: 700, stage1Nm: 1000, stage2Ps: 780, stage2Nm: 1100 } },
            ],
          },
        ],
      },
      {
        id: 'cla',
        name: 'CLA',
        generations: [
          {
            id: 'cla-c118',
            name: 'C118 (2019 – heute)',
            years: '2019 – heute',
            engines: [
              { id: 'cla-c118-cla45s', name: 'AMG CLA 45 S', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 421, nm: 500, stage1Ps: 480, stage1Nm: 600, stage2Ps: 520, stage2Nm: 650 } },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'vw',
    name: 'Volkswagen',
    models: [
      {
        id: 'golf',
        name: 'Golf',
        generations: [
          {
            id: 'golf-8',
            name: 'Golf 8 (2019 – heute)',
            years: '2019 – heute',
            engines: [
              { id: 'golf8-gti', name: 'GTI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 245, nm: 370, stage1Ps: 300, stage1Nm: 450, stage2Ps: 340, stage2Nm: 500 } },
              { id: 'golf8-gti-clubsport', name: 'GTI Clubsport', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 300, nm: 400, stage1Ps: 360, stage1Nm: 480, stage2Ps: 400, stage2Nm: 550 } },
              { id: 'golf8-r', name: 'R', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 320, nm: 420, stage1Ps: 380, stage1Nm: 500, stage2Ps: 420, stage2Nm: 580 } },
            ],
          },
          {
            id: 'golf-75',
            name: 'Golf 7.5 (2017 – 2019)',
            years: '2017 – 2019',
            engines: [
              { id: 'golf75-gti', name: 'GTI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 230, nm: 350, stage1Ps: 290, stage1Nm: 430, stage2Ps: 330, stage2Nm: 480 } },
              { id: 'golf75-gti-p', name: 'GTI Performance', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 245, nm: 370, stage1Ps: 300, stage1Nm: 450, stage2Ps: 340, stage2Nm: 500 } },
              { id: 'golf75-r', name: 'R', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 310, nm: 400, stage1Ps: 370, stage1Nm: 480, stage2Ps: 410, stage2Nm: 550 } },
            ],
          },
        ],
      },
      {
        id: 'arteon',
        name: 'Arteon',
        generations: [
          {
            id: 'arteon-3h',
            name: '3H (2017 – heute)',
            years: '2017 – heute',
            engines: [
              { id: 'arteon-3h-20tsi', name: '2.0 TSI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 190, nm: 320, stage1Ps: 245, stage1Nm: 420 } },
              { id: 'arteon-3h-r', name: 'R', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 320, nm: 420, stage1Ps: 380, stage1Nm: 500, stage2Ps: 420, stage2Nm: 580 } },
            ],
          },
        ],
      },
      {
        id: 'tiguan',
        name: 'Tiguan',
        generations: [
          {
            id: 'tiguan-ad1',
            name: 'AD1 (2016 – heute)',
            years: '2016 – heute',
            engines: [
              { id: 'tiguan-ad1-20tsi', name: '2.0 TSI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 220, nm: 350, stage1Ps: 280, stage1Nm: 440 } },
            ],
          },
        ],
      },
      {
        id: 't-roc',
        name: 'T-Roc',
        generations: [
          {
            id: 'troc-a1',
            name: 'A1 (2017 – heute)',
            years: '2017 – heute',
            engines: [
              { id: 'troc-a1-r', name: 'R', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 300, nm: 400, stage1Ps: 360, stage1Nm: 480, stage2Ps: 400, stage2Nm: 550 } },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'porsche',
    name: 'Porsche',
    models: [
      {
        id: '911',
        name: '911',
        generations: [
          {
            id: '911-992',
            name: '992 (2019 – heute)',
            years: '2019 – heute',
            engines: [
              { id: '911-992-carrera', name: 'Carrera', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 385, nm: 450, stage1Ps: 450, stage1Nm: 550, stage2Ps: 500, stage2Nm: 620 } },
              { id: '911-992-carrera-s', name: 'Carrera S', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 450, nm: 530, stage1Ps: 520, stage1Nm: 630, stage2Ps: 570, stage2Nm: 700 } },
              { id: '911-992-gts', name: 'Carrera GTS', displacement: '3.0L', fuelType: 'Benzin', tuning: { ps: 480, nm: 570, stage1Ps: 550, stage1Nm: 670, stage2Ps: 600, stage2Nm: 740 } },
              { id: '911-992-turbo-s', name: 'Turbo S', displacement: '3.7L', fuelType: 'Benzin', tuning: { ps: 650, nm: 800, stage1Ps: 750, stage1Nm: 950, stage2Ps: 820, stage2Nm: 1050 } },
            ],
          },
        ],
      },
      {
        id: 'cayenne',
        name: 'Cayenne',
        generations: [
          {
            id: 'cayenne-9ya',
            name: '9YA (2017 – heute)',
            years: '2017 – heute',
            engines: [
              { id: 'cayenne-9ya-s', name: 'S', displacement: '2.9L V6', fuelType: 'Benzin', tuning: { ps: 440, nm: 550, stage1Ps: 510, stage1Nm: 660, stage2Ps: 560, stage2Nm: 720 } },
              { id: 'cayenne-9ya-turbo', name: 'Turbo', displacement: '4.0L V8', fuelType: 'Benzin', tuning: { ps: 550, nm: 770, stage1Ps: 630, stage1Nm: 900, stage2Ps: 700, stage2Nm: 1000 } },
              { id: 'cayenne-9ya-turbo-gt', name: 'Turbo GT', displacement: '4.0L V8', fuelType: 'Benzin', tuning: { ps: 640, nm: 850, stage1Ps: 720, stage1Nm: 980, stage2Ps: 780, stage2Nm: 1080 } },
            ],
          },
        ],
      },
      {
        id: 'panamera',
        name: 'Panamera',
        generations: [
          {
            id: 'panamera-971',
            name: '971 (2016 – heute)',
            years: '2016 – heute',
            engines: [
              { id: 'panamera-971-gts', name: 'GTS', displacement: '4.0L V8', fuelType: 'Benzin', tuning: { ps: 480, nm: 620, stage1Ps: 560, stage1Nm: 740, stage2Ps: 620, stage2Nm: 820 } },
              { id: 'panamera-971-turbo-s', name: 'Turbo S', displacement: '4.0L V8', fuelType: 'Benzin', tuning: { ps: 630, nm: 820, stage1Ps: 720, stage1Nm: 960, stage2Ps: 800, stage2Nm: 1100 } },
            ],
          },
        ],
      },
      {
        id: 'macan',
        name: 'Macan',
        generations: [
          {
            id: 'macan-95b',
            name: '95B.2 (2018 – heute)',
            years: '2018 – heute',
            engines: [
              { id: 'macan-95b-s', name: 'S', displacement: '3.0L V6', fuelType: 'Benzin', tuning: { ps: 354, nm: 480, stage1Ps: 420, stage1Nm: 580, stage2Ps: 460, stage2Nm: 640 } },
              { id: 'macan-95b-gts', name: 'GTS', displacement: '2.9L V6', fuelType: 'Benzin', tuning: { ps: 440, nm: 550, stage1Ps: 510, stage1Nm: 660, stage2Ps: 560, stage2Nm: 720 } },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'seat',
    name: 'SEAT',
    models: [
      {
        id: 'leon',
        name: 'Leon',
        generations: [
          {
            id: 'leon-kl',
            name: 'KL (2020 – heute)',
            years: '2020 – heute',
            engines: [
              { id: 'leon-kl-cupra', name: 'Cupra', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 300, nm: 400, stage1Ps: 360, stage1Nm: 480, stage2Ps: 400, stage2Nm: 550 } },
              { id: 'leon-kl-cupra-310', name: 'Cupra 310', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 310, nm: 400, stage1Ps: 370, stage1Nm: 490, stage2Ps: 410, stage2Nm: 560 } },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cupra',
    name: 'Cupra',
    models: [
      {
        id: 'formentor',
        name: 'Formentor',
        generations: [
          {
            id: 'formentor-kl',
            name: 'KM (2020 – heute)',
            years: '2020 – heute',
            engines: [
              { id: 'formentor-kl-20tsi', name: '2.0 TSI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 190, nm: 320, stage1Ps: 245, stage1Nm: 420 } },
              { id: 'formentor-kl-vz5', name: 'VZ5', displacement: '2.5L', fuelType: 'Benzin', tuning: { ps: 390, nm: 480, stage1Ps: 450, stage1Nm: 580, stage2Ps: 490, stage2Nm: 640 } },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    models: [
      {
        id: 'i30n',
        name: 'i30 N',
        generations: [
          {
            id: 'i30n-pd',
            name: 'PD (2017 – 2023)',
            years: '2017 – 2023',
            engines: [
              { id: 'i30n-pd-20t', name: '2.0 T-GDI', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 250, nm: 353, stage1Ps: 310, stage1Nm: 440, stage2Ps: 350, stage2Nm: 500 } },
              { id: 'i30n-pd-20t-p', name: '2.0 T-GDI Performance', displacement: '2.0L', fuelType: 'Benzin', tuning: { ps: 280, nm: 392, stage1Ps: 340, stage1Nm: 480, stage2Ps: 380, stage2Nm: 540 } },
            ],
          },
        ],
      },
    ],
  },
];