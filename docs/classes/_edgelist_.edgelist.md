> **[graphs-ts](../README.md)**

[Globals](../README.md) / ["EdgeList"](../modules/_edgelist_.md) / [EdgeList](_edgelist_.edgelist.md) /

# Class: EdgeList

## Hierarchy

* `Set<Vertex>`

  * **EdgeList**

### Index

#### Properties

* [__@toStringTag](_edgelist_.edgelist.md#__@tostringtag)
* [size](_edgelist_.edgelist.md#size)
* [Set](_edgelist_.edgelist.md#static-set)

#### Methods

* [__@iterator](_edgelist_.edgelist.md#__@iterator)
* [add](_edgelist_.edgelist.md#add)
* [clear](_edgelist_.edgelist.md#clear)
* [delete](_edgelist_.edgelist.md#delete)
* [entries](_edgelist_.edgelist.md#entries)
* [forEach](_edgelist_.edgelist.md#foreach)
* [has](_edgelist_.edgelist.md#has)
* [keys](_edgelist_.edgelist.md#keys)
* [values](_edgelist_.edgelist.md#values)

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:64

___

### `Static` Set

▪ **Set**: *`SetConstructor`*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:71

## Methods

###  __@iterator

▸ **__@iterator**(): *`IterableIterator<Vertex>`*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:163

Iterates over values in the set.

**Returns:** *`IterableIterator<Vertex>`*

___

###  add

▸ **add**(`value`: [Vertex](_vertex_.vertex.md)): *this*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Vertex](_vertex_.vertex.md) |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: [Vertex](_vertex_.vertex.md)): *boolean*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Vertex](_vertex_.vertex.md) |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *`IterableIterator<[Vertex, Vertex]>`*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:167

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *`IterableIterator<[Vertex, Vertex]>`*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Vertex](_vertex_.vertex.md), `value2`: [Vertex](_vertex_.vertex.md), `set`: `Set<Vertex>`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Vertex](_vertex_.vertex.md) |
`value2` | [Vertex](_vertex_.vertex.md) |
`set` | `Set<Vertex>` |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: [Vertex](_vertex_.vertex.md)): *boolean*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Vertex](_vertex_.vertex.md) |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *`IterableIterator<Vertex>`*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Despite its name, returns an iterable of the values in the set,

**Returns:** *`IterableIterator<Vertex>`*

___

###  values

▸ **values**(): *`IterableIterator<Vertex>`*

*Inherited from void*

Defined in /Users/bgoodman/git/functions/graphs-ts/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:176

Returns an iterable of values in the set.

**Returns:** *`IterableIterator<Vertex>`*