> **[graphs-ts](../README.md)**

[Globals](../README.md) / ["FileTree"](../modules/_filetree_.md) / [FileTree](_filetree_.filetree.md) /

# Class: FileTree

## Hierarchy

  * [Graph](_graph_.graph.md)

  * **FileTree**

### Index

#### Constructors

* [constructor](_filetree_.filetree.md#constructor)

#### Properties

* [__@toStringTag](_filetree_.filetree.md#__@tostringtag)
* [matchContext](_filetree_.filetree.md#private-matchcontext)
* [size](_filetree_.filetree.md#size)
* [vertices](_filetree_.filetree.md#vertices)

#### Methods

* [__@iterator](_filetree_.filetree.md#__@iterator)
* [addEdge](_filetree_.filetree.md#addedge)
* [addVertex](_filetree_.filetree.md#addvertex)
* [clear](_filetree_.filetree.md#clear)
* [delete](_filetree_.filetree.md#delete)
* [entries](_filetree_.filetree.md#entries)
* [forEach](_filetree_.filetree.md#foreach)
* [get](_filetree_.filetree.md#get)
* [has](_filetree_.filetree.md#has)
* [keys](_filetree_.filetree.md#keys)
* [set](_filetree_.filetree.md#set)
* [values](_filetree_.filetree.md#values)

## Constructors

###  constructor

\+ **new FileTree**(`tree`: string): *[FileTree](_filetree_.filetree.md)*

*Overrides [Graph](_graph_.graph.md).[constructor](_graph_.graph.md#constructor)*

Defined in FileTree.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`tree` | string |

**Returns:** *[FileTree](_filetree_.filetree.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

### `Private` matchContext

• **matchContext**: *`RegExp`* =  new RegExp(/^([│├└─]+\s+)+/)

Defined in FileTree.ts:5

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

###  vertices

• **vertices**: *`Map<string, Vertex<__type>>`* =  new Map<string, Vertex>()

*Inherited from [Graph](_graph_.graph.md).[vertices](_graph_.graph.md#vertices)*

*Defined in [Graph.ts:8](https://github.com/b-goodman/graphs-ts/blob/ea1c63b/src/Graph.ts#L8)*

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

*Inherited from [Graph](_graph_.graph.md).[addEdge](_graph_.graph.md#addedge)*

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

*Inherited from [Graph](_graph_.graph.md).[addVertex](_graph_.graph.md#addvertex)*

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