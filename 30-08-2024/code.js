Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\singh\OneDrive\Desktop\back-end-G09> mongosh
Current Mongosh Log ID: 66d14970c6deddf01d2710bb
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
Using MongoDB:          7.0.14
Using Mongosh:          2.3.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-08-30T09:36:20.459+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> db
test
test> use abcd
switched to db abcd
abcd> db.user.insertMany([ { name: "Alex", age: 24, marks: 50, subject: "Physical Edu" }, { name: "Josh", age: 25, marksabcd> db.user.insertMany([ { name: "Alex", age: 24, marks: 50, subject: "Physical Edu" }, { name: "Josh", age: 25, marks: 70, subject: "Maths" }, { name: "Christian", age: 28, marks: 60, subject: "Economics" }, { name: "Rhys", age: 27, mark
marks: 55, subject: "Science" }, { name: "Jameson", age: 20, marks: 67, subject: "History" }] )
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d149c2c6deddf01d2710bc'),
    '1': ObjectId('66d149c2c6deddf01d2710bd'),
    '2': ObjectId('66d149c2c6deddf01d2710be'),
    '3': ObjectId('66d149c2c6deddf01d2710bf'),
    '4': ObjectId('66d149c2c6deddf01d2710c0')
  }
}
abcd> show collections
user
abcd> db.inventory.updateMany(
...    { "qty": { $lt: 50 } },
...    {
...      $set: { "size.uom": "in", status: "P" },
...      $currentDate: { lastModified: true }
...    }
...
abcd> db.abcd.updateMany(
... {},
... {
... $set:{
...
AbortController                   AbortSignal                       AggregateError
Array                             ArrayBuffer                       Atomics
BSONRegExp                        BSONSymbol                        BigInt
BigInt64Array                     BigUint64Array                    BinData
Binary                            Blob                              Boolean
BroadcastChannel                  Buffer                            ByteLengthQueuingStrategy
Code                              CompressionStream                 CountQueuingStrategy
Crypto                            CryptoKey                         CustomEvent
DBQuery                           DBRef                             DOMException
DataView                          Date                              Decimal128
DecompressionStream               Double                            EJSON
Error                             EvalError                         Event
EventTarget                       File                              FinalizationRegistry
Float32Array                      Float64Array                      FormData
Function                          Headers                           HexData
ISODate                           Infinity                          Int16Array
Int32                             Int32Array                        Int8Array
Intl                              JSON                              Long
MD5                               Map                               Math
MaxKey                            MessageChannel                    MessageEvent
MessagePort                       MinKey                            Mongo
MongoshAsyncWriterError           NaN                               Number
NumberDecimal                     NumberInt                         NumberLong
Object                            ObjectId                          Performance
PerformanceEntry                  PerformanceMark                   PerformanceMeasure
PerformanceObserver               PerformanceObserverEntryList      PerformanceResourceTiming
Promise                           Proxy                             RangeError
ReadableByteStreamController      ReadableStream                    ReadableStreamBYOBReader
ReadableStreamBYOBRequest         ReadableStreamDefaultController   ReadableStreamDefaultReader
ReferenceError                    Reflect                           RegExp
Request                           Response                          Set
SharedArrayBuffer                 String                            SubtleCrypto
Symbol                            SyntaxError                       TextDecoder
TextDecoderStream                 TextEncoder                       TextEncoderStream
Timestamp                         TransformStream                   TransformStreamDefaultController
TypeError                         TypedArray                        URIError
URL                               URLSearchParams                   UUID
Uint16Array                       Uint32Array                       Uint8Array
Uint8ClampedArray                 WeakMap                           WeakRef
WeakSet                           WebAssembly                       WritableStream
WritableStreamDefaultController   WritableStreamDefaultWriter       _
_arrayLikeToArray                 _arrayWithHoles                   _error
_iterableToArrayLimit             _nonIterableRest                  _print
_slicedToArray                    _unsupportedIterableToArray       _untrackedShow
assert                            async_hooks                       atob
bsonsize                          btoa                              buffer
buildInfo                         child_process                     clearImmediate
clearInterval                     clearTimeout                      cls
cluster                           config                            connect
console                           constants                         convertShardKeyToHashed
crypto                            db                                decodeURI
decodeURIComponent                dgram                             diagnostics_channel
disableTelemetry                  dns                               domain
edit                              enableTelemetry                   encodeURI
encodeURIComponent                escape                            eval
events                            exit                              fetch
fs                                global                            globalThis
help                              http                              http2
https                             inspector                         isFinite
isInteractive                     isNaN                             it
load                              module                            net
origArraySort                     origFptS                          origTypedArraySort
os                                parseFloat                        parseInt
passwordPrompt                    path                              perf_hooks
performance                       print                             printjson
process                           punycode                          querystring
queueMicrotask                    quit                              readline
repl                              require                           rs
setImmediate                      setInterval                       setTimeout
sh                                show                              sleep
snippet                           sp                                stream
string_decoder                    structuredClone                   sys
timers                            tls                               trace_events
tty                               undefined                         unescape
url                               use                               util
v8                                version                           vm
wasi                              worker_threads                    zlib

__proto__                         constructor                       hasOwnProperty
isPrototypeOf                     propertyIsEnumerable              toLocaleString
toString                          valueOf

...
abcd> db.abcd.updateMany(
...
abcd> db.abcd.updateMany()
MongoshInvalidInputError: [COMMON-10001] Missing required argument at position 0 (Collection.updateMany)
abcd> db.abcd.updateMany();
MongoshInvalidInputError: [COMMON-10001] Missing required argument at position 0 (Collection.updateMany)
abcd> db.abcd.updateMany({},{$set:{subject:"datascience",address:"Chitkara University"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
abcd> cd user
Uncaught:
SyntaxError: Missing semicolon. (1:2)

> 1 | cd user
    |   ^
  2 |

abcd> cd user;
Uncaught:
SyntaxError: Missing semicolon. (1:2)

> 1 | cd user;
    |   ^
  2 |

abcd> db.user.updateMany({},{$set:{subject:"datascience",address:"Chitkara University"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}
abcd> db.user.insertMany([ { grade: "B+" }, { grade: "A+" }, { grade: "A" }, { grade: "B" }, { grade:"C" }] )
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d151bbc6deddf01d2710c1'),
    '1': ObjectId('66d151bbc6deddf01d2710c2'),
    '2': ObjectId('66d151bbc6deddf01d2710c3'),
    '3': ObjectId('66d151bbc6deddf01d2710c4'),
    '4': ObjectId('66d151bbc6deddf01d2710c5')
  }
}
abcd> db.user.updateMany(
...   {},  // This empty filter matches all documents
...   { $set: { grade: "B" } }  // This sets the grade field to "B"
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}
abcd>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
abcd> db.user.updateOne(
...   { name: "Alex" },  // Filter to find the document for Alex
...   { $set: { grade: "C" } }  // Set grade to "C"
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
abcd>

abcd> db.user.updateOne(
...   { name: "Josh" },  // Filter to find the document for Josh
...   { $set: { grade: "A" } }  // Set grade to "A"
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
abcd>

abcd> db.user.updateOne(
...   { name: "Christian" },  // Filter to find the document for Christian
...   { $set: { grade: "B" } }  // Set grade to "B"
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}
abcd>

abcd> db.user.updateOne(
...   { name: "Rhys" },  // Filter to find the document for Rhys
...   { $set: { grade: "C" } }  // Set grade to "C"
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
abcd>

abcd> db.user.updateOne(
...   { name: "Jameson" },  // Filter to find the document for Jameson
...   { $set: { grade: "B" } }  // Set grade to "B"
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}
abcd> db.user.find({},{age:22,marks:90})
[
  { _id: ObjectId('66d149c2c6deddf01d2710bc'), age: 24, marks: 50 },
  { _id: ObjectId('66d149c2c6deddf01d2710bd'), age: 25, marks: 70 },
  { _id: ObjectId('66d149c2c6deddf01d2710be'), age: 28, marks: 60 },
  { _id: ObjectId('66d149c2c6deddf01d2710bf'), age: 27, marks: 55 },
  { _id: ObjectId('66d149c2c6deddf01d2710c0'), age: 20, marks: 67 }
]
abcd> db.user.find({ age: 22, marks: 90 })

abcd> db.user.find({ age: 25, marks: 70 })
[
  {
    _id: ObjectId('66d149c2c6deddf01d2710bd'),
    name: 'Josh',
    age: 25,
    marks: 70,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'A'
  }
]
abcd> db.user.find({ age: {$gte:18}, marks:{$gte 80} })
Uncaught:
SyntaxError: Unexpected token, expected "," (1:43)

> 1 | db.user.find({ age: {$gte:18}, marks:{$gte 80} })
    |                                            ^
  2 |

abcd> db.user.find({ age: {$gte:18}, marks:{$gte:80} })

abcd> db.user.find({ age: {$gte:18}, marks:{$gte:60} })
[
  {
    _id: ObjectId('66d149c2c6deddf01d2710bd'),
    name: 'Josh',
    age: 25,
    marks: 70,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'A'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710be'),
    name: 'Christian',
    age: 28,
    marks: 60,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'B'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710c0'),
    name: 'Jameson',
    age: 20,
    marks: 67,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'B'
  }
]
abcd>  db.user.find( { $and: [ { name: { "josh" } }, { marks: { $eq: 70 } } ] } )
Uncaught:
SyntaxError: Unexpected token (1:42)

> 1 |  db.user.find( { $and: [ { name: { "josh" } }, { marks: { $eq: 70 } } ] } )
    |                                           ^
  2 |

abcd>  db.user.find( { $and: [ { name:  "josh"  }, { marks: { $eq: 70 } } ] } )

abcd>  db.user.find( { $and: [ { name:  "Josh"  }, { marks: { $eq: 70 } } ] } )
[
  {
    _id: ObjectId('66d149c2c6deddf01d2710bd'),
    name: 'Josh',
    age: 25,
    marks: 70,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'A'
  }
]
abcd>  db.inventory.find( { grade: { $not: { $gt: 70 } } } )

abcd>  db.inventory.find( { marks: { $not: { $gt: 70 } } } )

abcd>  db.user.find( { marks: { $not: { $gt: 70 } } } )
[
  {
    _id: ObjectId('66d149c2c6deddf01d2710bc'),
    name: 'Alex',
    age: 24,
    marks: 50,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'C'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710bd'),
    name: 'Josh',
    age: 25,
    marks: 70,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'A'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710be'),
    name: 'Christian',
    age: 28,
    marks: 60,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'B'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710bf'),
    name: 'Rhys',
    age: 27,
    marks: 55,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'C'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710c0'),
    name: 'Jameson',
    age: 20,
    marks: 67,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'B'
  }
]
abcd>  db.user.find( { marks: { $not: { $gt: 60 } } } )
[
  {
    _id: ObjectId('66d149c2c6deddf01d2710bc'),
    name: 'Alex',
    age: 24,
    marks: 50,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'C'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710be'),
    name: 'Christian',
    age: 28,
    marks: 60,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'B'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710bf'),
    name: 'Rhys',
    age: 27,
    marks: 55,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'C'
  }
]
abcd>  db.user.find( { marks: { $not: { $gte: 60 } } } )
[
  {
    _id: ObjectId('66d149c2c6deddf01d2710bc'),
    name: 'Alex',
    age: 24,
    marks: 50,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'C'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710bf'),
    name: 'Rhys',
    age: 27,
    marks: 55,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'C'
  }
]
abcd> db.inventory.find( { $nor: [ { marks:60 }, { grade: "C" } ]  } )

abcd> db.user.find( { $nor: [ { marks:60 }, { grade: "C" } ]  } )
[
  {
    _id: ObjectId('66d149c2c6deddf01d2710bd'),
    name: 'Josh',
    age: 25,
    marks: 70,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'A'
  },
  {
    _id: ObjectId('66d149c2c6deddf01d2710c0'),
    name: 'Jameson',
    age: 20,
    marks: 67,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'B'
  }
]
abcd> db.user.find( { $or: [ { marks: { $lt: 50 } }, { age: 18 } ] } )

abcd> db.user.find( { $or: [ { marks: { $lt: 50 } }, { age:{ $eq: 18 } } ] } )

abcd> db.user.find( { $or: [ { marks: { $lt: 50 } }, { age:{ $eq: 20} } ] } )
[
  {
    _id: ObjectId('66d149c2c6deddf01d2710c0'),
    name: 'Jameson',
    age: 20,
    marks: 67,
    subject: 'datascience',
    address: 'Chitkara University',
    grade: 'B'
  }
]
abcd>  db.user.find( { $or: [ { marks: { $lt: 50 } }, { age:{ $eq: 20} } ] } )