# Hashtables

<!-- Short summary or background information -->

A hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

## Challenge

<!-- Description of the challenge -->

Create a Hash Table/Map and integrate Linked-List as data that goes in the Hash table.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- Create Linked-List class with built in methods.
- Create HashMap class that takes in a size parameter.
- Create `hash` method which hashes the key value and returns a number that is within the size of the Map.
- Create `set` method which takes a key and value parameter and inserts it into the HashMap.
- Create `get` method which retrieves the value based on the key parameter passed.
- Create `has` method which returns a boolean if the key exist in the map or not.

## API

<!-- Description of each method publicly available in each of your hashtable -->

- `hash()` - takes in a key and hashes the key into a integer that is within the size of Map.

- `set()` - takes in a key AND value calls the hash method on the key, then sets the hashed key inside the map along with the value.

- `get()` - takes in key and checks the HashMap if the key exists and returns the value. If the value does not exists return null.

- `hash()` - takes in key and checks the HashMap if the key exists and returns a boolean.
