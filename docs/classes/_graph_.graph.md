> **[graphs-ts](../README.md)**

[Globals](../README.md) / ["Graph"](../modules/_graph_.md) / [Graph](_graph_.graph.md) /

# Class: Graph

## Hierarchy

* `Map<string, EdgeList>`

  * **Graph**

  * [FileTree](_filetree_.filetree.md)

### Index

#### Constructors

* [constructor](_graph_.graph.md#constructor)

#### Properties

* [__@toStringTag](_graph_.graph.md#__@tostringtag)
* [opts](_graph_.graph.md#private-opts)
* [size](_graph_.graph.md#size)
* [vertices](_graph_.graph.md#vertices)
* [Map](_graph_.graph.md#static-map)

#### Methods

* [__@iterator](_graph_.graph.md#__@iterator)
* [addEdge](_graph_.graph.md#addedge)
* [addVertex](_graph_.graph.md#addvertex)
* [clear](_graph_.graph.md#clear)
* [delete](_graph_.graph.md#delete)
* [entries](_graph_.graph.md#entries)
* [forEach](_graph_.graph.md#foreach)
* [get](_graph_.graph.md#get)
* [has](_graph_.graph.md#has)
* [keys](_graph_.graph.md#keys)
* [set](_graph_.graph.md#set)
* [values](_graph_.graph.md#values)

#### Object literals

* [defaultOpts](_graph_.graph.md#private-defaultopts)

## Constructors

###  constructor

\+ **new Graph**(`opts`: object): *[Graph](_graph_.graph.md)*

*Defined in [Graph.ts:8](https://github.com/b-goodman/graphs-ts/blob/ea1c63b/src/Graph.ts#L8)*

**Parameters:**

▪`Default value`  **opts**: *object*=  {}

Name | Type |
------ | ------ |
`directed?` | undefined \| false \| true |

**Returns:** *[Graph](_graph_.graph.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

### `Private` opts

• **opts**: *object*

*Defined in [Graph.ts:7](https://github.com/b-goodman/graphs-ts/blob/ea1c63b/src/Graph.ts#L7)*

#### Type declaration:

* **directed**: *boolean*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

###  vertices

• **vertices**: *`Map<string, Vertex<__type>>`* =  new Map<string, Vertex>()

*Defined in [Graph.ts:8](https://github.com/b-goodman/graphs-ts/blob/ea1c63b/src/Graph.ts#L8)*

___

### `Static` Map

▪ **Map**: *`MapConstructor`*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Methods

###  __@iterator

▸ **__@iterator**(): *`IterableIterator<[string, EdgeList]>`*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113

Returns an iterable of entries in the map.

**Returns:** *`IterableIterator<[string, EdgeList]>`*

___

###  addEdge

▸ **addEdge**(`tagA`: string, `tagB`: string): *void*

*Defined in [Graph.ts:22](https://github.com/b-goodman/graphs-ts/blob/ea1c63b/src/Graph.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`tagA` | string |
`tagB` | string |

**Returns:** *void*

___

###  addVertex

▸ **addVertex**<**T**>(`tag`: string, `data?`: [T]()): *[Vertex](_vertex_.vertex.md)‹*`T`*›*

*Defined in [Graph.ts:15](https://github.com/b-goodman/graphs-ts/blob/ea1c63b/src/Graph.ts#L15)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |
`data?` | [T]() |

**Returns:** *[Vertex](_vertex_.vertex.md)‹*`T`*›*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: string): *boolean*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *`IterableIterator<[string, EdgeList]>`*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *`IterableIterator<[string, EdgeList]>`*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [EdgeList](_edgelist_.edgelist.md), `key`: string, `map`: `Map<string, EdgeList>`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [EdgeList](_edgelist_.edgelist.md) |
`key` | string |
`map` | `Map<string, EdgeList>` |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *[EdgeList](_edgelist_.edgelist.md) | undefined*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[EdgeList](_edgelist_.edgelist.md) | undefined*

___

###  has

▸ **has**(`key`: string): *boolean*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *`IterableIterator<string>`*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123

Returns an iterable of keys in the map

**Returns:** *`IterableIterator<string>`*

___

###  set

▸ **set**(`key`: string, `value`: [EdgeList](_edgelist_.edgelist.md)): *this*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [EdgeList](_edgelist_.edgelist.md) |

**Returns:** *this*

___

###  values

▸ **values**(): *`IterableIterator<EdgeList>`*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128

Returns an iterable of values in the map

**Returns:** *`IterableIterator<EdgeList>`*

## Object literals

### `Private` defaultOpts

### ▪ **defaultOpts**: *object*

*Defined in [Graph.ts:6](https://github.com/b-goodman/graphs-ts/blob/ea1c63b/src/Graph.ts#L6)*

###  directed

• **directed**: *boolean* = true

*Defined in [Graph.ts:6](https://github.com/b-goodman/graphs-ts/blob/ea1c63b/src/Graph.ts#L6)*