# Portfolio
- [Demo](https://black-turtle.github.io/portfolio)
- Tools used: `React`, `NextJs`, `Chakra UI`


## How to use this theme
You can use this project as a template to build your own portfolio. To use this as a template just follow the following steps:
1. Fork or clone this repository
2. To change contents you just need to edit files present in this [folder](https://github.com/black-turtle/portfolio/tree/main/data). There is 4 catagories of data. Structure of those is present in this [types file](https://github.com/black-turtle/portfolio/blob/main/data/types.ts) 
   - General or common data (eg: name, role, etc)
   - skill data
   - project data
   - job experience data
3. To use `static contents(eg: CV or images)` you should upload it in [assets folder](https://github.com/black-turtle/portfolio/tree/main/public/assets). Then you can refer these files using `/assets/[fileName]` in data files. [Example](https://github.com/black-turtle/portfolio/blob/main/data/projects.data.ts#L6)


## To DO
- [ ] add page transition animation on scroll