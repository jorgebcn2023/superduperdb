"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5175],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i="Training and maintaining MNIST predictions",s={unversionedId:"use_cases/items/mnist_torch",id:"use_cases/items/mnist_torch",title:"Training and maintaining MNIST predictions",description:"In this notebook we'll be implementing a classic machine learning classification task: MNIST hand written digit",source:"@site/content/use_cases/items/mnist_torch.md",sourceDirName:"use_cases/items",slug:"/use_cases/items/mnist_torch",permalink:"/docs/use_cases/items/mnist_torch",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/use_cases/items/mnist_torch.md",tags:[],version:"current",frontMatter:{},sidebar:"useCasesSidebar",previous:{title:"Turn your classical-database into a vector-database with SuperDuperDB",permalink:"/docs/use_cases/items/compare_vector_search_solutions"},next:{title:"Multimodal search with CLIP",permalink:"/docs/use_cases/items/multimodal_image_search_clip"}},l={},p=[],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"training-and-maintaining-mnist-predictions"},"Training and maintaining MNIST predictions"),(0,a.kt)("p",null,"In this notebook we'll be implementing a classic machine learning classification task: MNIST hand written digit\nrecognition, using a convolution neural network, but with a twist: we'll be implementing the task ",(0,a.kt)("em",{parentName:"p"},"in database")," using SuperDuperDB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!pip install matplotlib\n!pip install superduperdb[torch]\n")),(0,a.kt)("p",null,"SuperDuperDB supports MongoDB as a databackend. Correspondingly, we'll import the python MongoDB client ",(0,a.kt)("inlineCode",{parentName:"p"},"pymongo"),'\nand "wrap" our database to convert it to a SuperDuper ',(0,a.kt)("inlineCode",{parentName:"p"},"Datalayer"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\nimport torchvision\n\nimport os\n\n# Uncomment one of the following lines to use a bespoke MongoDB deployment\n# For testing the default connection is to mongomock\n\nmongodb_uri = os.getenv("MONGODB_URI","mongomock://test")\n# mongodb_uri = "mongodb://localhost:27017"\n# mongodb_uri = "mongodb://superduper:superduper@mongodb:27017/documents"\n# mongodb_uri = "mongodb://<user>:<pass>@<mongo_cluster>/<database>"\n# mongodb_uri = "mongodb+srv://<username>:<password>@<atlas_cluster>/<database>"\n\n# Super-Duper your Database!\nfrom superduperdb import superduper\ndb = superduper(mongodb_uri)\n')),(0,a.kt)("p",null,"Now that we've connected to SuperDuperDB, let's add some data. MNIST is a good show case for one of the\nkey benefits of SuperDuperDB - adding \"difficult\" data types. This can be done using an ",(0,a.kt)("inlineCode",{parentName:"p"},"Encoder"),"\nwhich is a key wrapper in SuperDuperDB's arsenal. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Encoder")," works closely together with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Document"),"\nwrapper. Together they allow Python dictionaries containing non-JSONable/ ",(0,a.kt)("inlineCode",{parentName:"p"},"bytes")," objects, to be insert into\nSuperDuperDB:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.ext.pillow.image import pil_image as i\nfrom superduperdb.container.document import Document as D\nfrom superduperdb.db.mongodb.query import Collection\n\nimport random\n\ncollection = Collection(name='mnist')\n\nmnist_data = list(torchvision.datasets.MNIST(root='./data', download=True))\ndata = [D({'img': i(x[0]), 'class': x[1]}) for x in mnist_data]\nrandom.shuffle(data)\ndata = data[:1000]\n\ndb.execute(\n    collection.insert_many(data[:-100], encoders=[i])\n)\n")),(0,a.kt)("p",null,"Now that we've inserted the images and their classes to the database, let's query some data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"r = db.execute(collection.find_one())\nr.unpack()\n")),(0,a.kt)("p",null,"When we query the data, it's in exactly the format we inserted it. In particular, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PIL.Image")," instances\nto inspect the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"r.unpack()['img']\n")),(0,a.kt)("p",null,"Now let's create our model. SuperDuperDB supports these frameworks, out-of-the-box:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"torch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sklearn")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transformers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sentence_transformers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openai")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"langchain"))),(0,a.kt)("p",null,"In this case, we're going to use PyTorch, since it's great for computer vision use-cases.\nWe can combine ",(0,a.kt)("inlineCode",{parentName:"p"},"torch")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"torchvision")," in SuperDuperDB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class LeNet5(torch.nn.Module):\n    def __init__(self, num_classes):\n        super().__init__()\n        self.layer1 = torch.nn.Sequential(\n            torch.nn.Conv2d(1, 6, kernel_size=5, stride=1, padding=0),\n            torch.nn.BatchNorm2d(6),\n            torch.nn.ReLU(),\n            torch.nn.MaxPool2d(kernel_size=2, stride=2))\n        self.layer2 = torch.nn.Sequential(\n            torch.nn.Conv2d(6, 16, kernel_size=5, stride=1, padding=0),\n            torch.nn.BatchNorm2d(16),\n            torch.nn.ReLU(),\n            torch.nn.MaxPool2d(kernel_size=2, stride=2))\n        self.fc = torch.nn.Linear(400, 120)\n        self.relu = torch.nn.ReLU()\n        self.fc1 = torch.nn.Linear(120, 84)\n        self.relu1 = torch.nn.ReLU()\n        self.fc2 = torch.nn.Linear(84, num_classes)\n\n    def forward(self, x):\n        out = self.layer1(x)\n        out = self.layer2(out)\n        out = out.reshape(out.size(0), -1)\n        out = self.fc(out)\n        out = self.relu(out)\n        out = self.fc1(out)\n        out = self.relu1(out)\n        out = self.fc2(out)\n        return out\n\n    \ndef postprocess(x):\n    return int(x.topk(1)[1].item())\n\n\ndef preprocess(x):\n    return torchvision.transforms.Compose([\n        torchvision.transforms.Resize((32, 32)),\n        torchvision.transforms.ToTensor(),\n        torchvision.transforms.Normalize(mean=(0.1307,), std=(0.3081,))]\n    )(x)\n")),(0,a.kt)("p",null,"We've created ",(0,a.kt)("inlineCode",{parentName:"p"},"postprocess")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"preprocess")," functions to handle the communication with the SuperDuperDB\n",(0,a.kt)("inlineCode",{parentName:"p"},"Datalayer"),". In order to create a native SuperDuperDB model, we wrap the model, preprocessing and postprocessing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"model = superduper(LeNet5(10), preprocess=preprocess, postprocess=postprocess)\ndb.add(model)\n")),(0,a.kt)("p",null,"The model predicts human readable outputs, directly from the ",(0,a.kt)("inlineCode",{parentName:"p"},"PIL.Image")," objects. All\nmodels in SuperDuperDB are equipped with a ",(0,a.kt)("inlineCode",{parentName:"p"},"sklearn"),"-style ",(0,a.kt)("inlineCode",{parentName:"p"},".predict")," method. This makes\nit easy to know how each AI-framework will operate in combination with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Datalayer"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"model.predict([r['img'] for r in data[:10]])\n")),(0,a.kt)("p",null,'Now we\'re ready to "train" or "fit" the model. Trainable models in SuperDuperDB are equipped\nwith a ',(0,a.kt)("inlineCode",{parentName:"p"},"sklearn"),"-like ",(0,a.kt)("inlineCode",{parentName:"p"},".fit")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from torch.nn.functional import cross_entropy\n\nfrom superduperdb.container.metric import Metric\nfrom superduperdb.container.dataset import Dataset\nfrom superduperdb.ext.torch.model import TorchTrainerConfiguration\n\n\njob = model.fit(\n    X='img',\n    y='class',\n    db=db,\n    select=collection.find(),\n    configuration=TorchTrainerConfiguration(\n        identifier='my_configuration',\n        objective=cross_entropy,\n        loader_kwargs={'batch_size': 10},\n        max_iterations=10,\n        validation_interval=5,\n    ),\n    metrics=[Metric(identifier='acc', object=lambda x, y: sum([xx == yy for xx, yy in zip(x, y)]) / len(x))],\n    validation_sets=[\n        Dataset(\n            identifier='my_valid',\n            select=Collection(name='mnist').find({'_fold': 'valid'}),\n        )\n    ],\n    distributed=False\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from matplotlib import pyplot as plt\n\nmodel = db.load('model', model.identifier)\n\nplt.plot(model.metric_values['my_valid/acc'])\nplt.show()\n")),(0,a.kt)("p",null,'Now that the model has been trained, we can use it to "listen" the data for incoming changes.\nThis is set up with a simple predict "on" the database (without loading all the data client-side).'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"listen"),' toggle "activates" the model:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"model.predict(X='img', db=db, select=collection.find(), listen=True, max_chunk_size=100)\n")),(0,a.kt)("p",null,"We can see that predictions are available in ",(0,a.kt)("inlineCode",{parentName:"p"},"_outputs.img.lenet5"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db.execute(collection.find_one({'_fold': 'valid'})).unpack()\n")),(0,a.kt)("p",null,'The models "activated" can be seen here:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db.show('listener')\n")),(0,a.kt)("p",null,"We can verify that the model is activated, by inserting the rest of the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"for r in data[-100:]:\n    r['update'] = True\n\ndb.execute(collection.insert_many(data[-100:]))\n")),(0,a.kt)("p",null,"You can see that the inserted data, are now also populated with predictions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db.execute(collection.find_one({'update': True}))['_outputs']\n")))}u.isMDXComponent=!0}}]);