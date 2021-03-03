# Component Tree


### 1. shouldComponentUpdate
```sh
Update child components whenever top level node values changes. 
This is done by comparing state / data value in child nodes. 
```
<hr/>

### 2. PureComponent
```sh
It automatically implements the above function and take cares
of props equality check.

File : GrandParent1.js

```
<hr/>

### 3. React.memo
```sh
This is cache based quick refernce lookup on props data 
for functional components 

File : functional_components/GrandParentFun.js

```
<hr/>