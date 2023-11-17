"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},s="Chunked vector-search using multiple inputs per document",i={unversionedId:"use_cases/items/chunked_vector_search",id:"use_cases/items/chunked_vector_search",title:"Chunked vector-search using multiple inputs per document",description:"In this example, we demonstrate how to implement vector-search, where the targets of search are envisaged",source:"@site/content/use_cases/items/chunked_vector_search.md",sourceDirName:"use_cases/items",slug:"/use_cases/items/chunked_vector_search",permalink:"/docs/use_cases/items/chunked_vector_search",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/use_cases/items/chunked_vector_search.md",tags:[],version:"current",frontMatter:{},sidebar:"useCasesSidebar",previous:{title:"Use-cases",permalink:"/docs/category/use-cases"},next:{title:"Training and Maintaining MNIST Predictions with SuperDuperDB",permalink:"/docs/use_cases/items/mnist_torch"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chunked-vector-search-using-multiple-inputs-per-document"},"Chunked vector-search using multiple inputs per document"),(0,o.kt)("p",null,"In this example, we demonstrate how to implement vector-search, where the targets of search are envisaged\nto be smaller units of text than the raw data. For example, a developer might like to store whole documents,\nbut search within those documents, finding substrings and references to the original document. "),(0,o.kt)("p",null,"This workflow is much trickier to implement than vanilla vector-search. Luckily, with ",(0,o.kt)("inlineCode",{parentName:"p"},"superduperdb"),", it is just one extra command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\n# Uncomment one of the following lines to use a bespoke MongoDB deployment\n# For testing the default connection is to mongomock\n\nmongodb_uri = os.getenv("MONGODB_URI", "mongomock://test")\n# mongodb_uri = "mongodb://localhost:27017"\n# mongodb_uri = "mongodb://superduper:superduper@mongodb:27017/documents"\n# mongodb_uri = "mongodb://<user>:<pass>@<mongo_cluster>/<database>"\n# mongodb_uri = "mongodb+srv://<username>:<password>@<atlas_cluster>/<database>"\n\n# Super-Duper your Database!\nfrom superduperdb import superduper\ndb = superduper(mongodb_uri)\n')),(0,o.kt)("p",null,"To demonstrate this type of search with larger chunks of text, we use a wikipedia sample."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!curl -O https://superduperdb-public.s3.eu-west-1.amazonaws.com/wikipedia-sample.json\n")),(0,o.kt)("p",null,"As before we insert the data using ",(0,o.kt)("inlineCode",{parentName:"p"},"pymongo"),"-similar syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import json\nfrom superduperdb.backends.mongodb import Collection\nfrom superduperdb import Document as D\n\nwith open('wikipedia-sample.json') as f:\n    data = json.load(f)[:100]\n\ndb.execute(Collection('wikipedia').insert_many([D(r) for r in data]))\n")),(0,o.kt)("p",null,"Let's have a look at a document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"r = db.execute(Collection('wikipedia').find_one()).unpack()\nr\n")),(0,o.kt)("p",null,"To create the search functionality, we set up a simple model, whose sole purpose is to chunk\nthe raw text into parts, and save those parts in another collecion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb import Model\n\ndef splitter(r):\n    out = [r['title']]\n    split = r['abstract'].split(' ')\n    for i in range(0, len(split) - 5, 5):\n        out.append(' '.join(split[i: i + 5]))\n    out = [x for x in out if x]\n    return out\n\n\nmodel = Model(\n    identifier='splitter',\n    object=splitter,\n    flatten=True,\n    model_update_kwargs={'document_embedded': False},\n)\n\nmodel.predict(r, one=True)\n")),(0,o.kt)("p",null,"Let's apply this model to the whole input collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"model.predict(\n    X='_base', \n    db=db,\n    select=Collection('wikipedia').find()\n)\n")),(0,o.kt)("p",null,"Now let's look at the split data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"db.execute(Collection('_outputs._base.splitter').find_one())\n")),(0,o.kt)("p",null,"We can search this data in a manner similar to previously:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb import VectorIndex, Listener\nfrom superduperdb.ext.openai import OpenAIEmbedding\n\nmodel = OpenAIEmbedding(model='text-embedding-ada-002')\n\ndb.add(\n    VectorIndex(\n        identifier=f'chunked-documents',\n        indexing_listener=Listener(\n            model=model,\n            key='_outputs._base.splitter',\n            select=Collection('_outputs._base.splitter').find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        ),\n        compatible_listener=Listener(\n            model=model,\n            key='_base',\n            select=None,\n            active=False,\n        )\n    )\n)\n")),(0,o.kt)("p",null,"Now we can search through the split-text collection and recall the full original documents,\nhighlighting which text was found to be relevant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.backends.mongodb import Collection\nfrom superduperdb import Document as D\nfrom IPython.display import *\n\nquery = 'politics'\n\nshingle_collection = Collection('_outputs._base.splitter')\nmain_collection = Collection('wikipedia')\n\nresult = db.execute(\n    shingle_collection\n        .like(D({'_base': query}), vector_index='chunked-documents', n=5)\n        .find({}, {'_outputs._base.text-embedding-ada-002': 0})\n)\n\ndisplay(Markdown(f'---'))\nfor shingle in result:\n    original = db.execute(main_collection.find_one({'_id': shingle['_source']}))\n\n    display(Markdown(f'# {original[\"title\"]}\"'))\n    \n    start = original['abstract'].find(shingle['_outputs']['_base']['splitter'])\n\n    to_format = (\n        original[\"abstract\"][:start] + '**' + '<span style=\"color:red\">' +\n        shingle[\"_outputs\"][\"_base\"][\"splitter\"].upper() + '**' + '<span style=\"color:black\">' +\n        original[\"abstract\"][start + len(shingle[\"_outputs\"][\"_base\"][\"splitter\"]):]\n    )\n    \n    display(Markdown(to_format))\n    display(Markdown(f'---'))\n")))}d.isMDXComponent=!0}}]);