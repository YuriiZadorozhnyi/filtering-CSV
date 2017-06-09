ENTRY DATA:
CSV extension file

EXAMPLE: 
example.csv

INNER FILE DATA FORMAT: 
time: in seconds, price: in USD/USDT, index: any
!!!!!!! DATA MUST BE WITHOUT HEADERS AT FIRST LINE LIKE IN ALL CSV FILES  !!!!!!
!!!!!!! FIRST LINE OF FILE MUST NOT BE EMPTY  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

INNER DATA EXAMPLE:
1491010157,1087.490000000000,0.345300000000
1491010188,1087.490000000000,0.850800000000
1491010214,1087.490000000000,0.190178900000 

YOU HAVE TEST FILE IN entry_data FOLDER

0. Instal NODE MODULES - "npm install" in root folder;
1. Put your CSV FILE to entry_data folder;
2. Open config.js file and enter your data: 
   config.period - period of time in seconds for shrink amount of data,
   config.file_name - name of your file at entry_data FOLDER;
3. Run app ("node app");
4. Receive your NEW file at exit_folder !!!)