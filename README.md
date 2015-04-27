# Useful:Visitor

Simple user tracking baked into your app so you can control and manipulate the data.

Example:

**Server server/lib/visitor.js**
```
Visitor.init();
```

**Client client/lib/visitor.js**
```
Visitor.init({
	subscribe: true
});
```

Adds the packages `useful:visitor-client` and `useful:visitor-server` to your app automatically.

# Installation

```
meteor add useful:visitor
```

# What you can do

## on the server

### `Visitor.init(options)`

_You must call init on the server to support anonymous user tracking._

The reason is that you have a choice of where to store the anonymous data.

#### options {} (all properties and the entire argument is optional)

```
{
	collection: your choice to name the collection
}
```

## on the client

### `Visitor.init(options)`

_You must call init on the client to begin anonymous user tracking._

The reason is that you have a choice of where to store the anonymous data
in case you want to offload this functionality to another server.

#### options {} (all properties and the entire argument is optional)

```
{
	collection: your choice to name the collection
	, connection: your choice of DDP connection to use
	, localStorageKey: your choice of what key to use to store the anonymous id in local storage
	, subscribe: true/false if you want to automatically subscribe to the current visitor's document (default **false**)
}
```

### `Visitor.id()` and `Meteor.visitorId()`

Reactively returns the randomly generated `id` of the current anonymous visitor (still exists when user is logged in).

### `Visitor.current()` and `Meteor.visitor()`

Reactively returns the document of the current anonymous visitor (still exists when user is logged in).

Properties that may be available on the document by default are:

```
{
	"_id" : "zfPeaxykvcuSSSu6f",
	"visitorId" : "2Jqa6GmSTXFWkoWX7",
	"userId" : "yQyrEySmi8mS8xgtH",
	"createdAt" : ISODate("2015-04-27T02:59:19.088Z"),
	"startPage" : "http://localhost:3000/proposal/N6gJbEvJm2dyGfMQm/send",
	"lastSeen" : ISODate("2015-04-27T03:01:12.235Z"),
	"lastSeenOnPage" : "http://localhost:3000/"
}
```

# Why you should care

You built an app, hooray! What are your users doing?

That's really important but not always obvious. And if you're
going to start tracking yourself you need a way to identify
anonymous visitors.

Now you can automatically collect basic information about visitors
to your app (logged in or not) and actually work with that data 
directly in your code.