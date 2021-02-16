# [get] /beneficiaries

* [(200) must return an array of beneficiaries if there is content saved on database](#d482c50f67)
* [(200) must return an empty array if there isn't content saved on database](#bff4920131)

---

### :chicken: `(200) must return an array of beneficiaries if there is content saved on database` <a name="d482c50f67"></a>

```sh
curl -X GET \
http://localhost:50645/beneficiaries \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |

Body: _empty_

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
[
  {
    "dependents": [],
    "plan": "STANDARD",
    "birthDate": "2021-02-16T19:40:59.088Z",
    "name": "Ronaldo",
    "cpf": "78374802286",
    "rg": "00.111.222-3",
    "createdAt": "2021-02-16T19:40:59.112Z",
    "updatedAt": "2021-02-16T19:40:59.112Z",
    "dependentsCount": 0,
    "id": "602c1fcbc922558f576d2a9e"
  },
  {
    "dependents": [],
    "plan": "STANDARD",
    "birthDate": "2021-02-16T19:40:59.118Z",
    "name": "Ronaldo",
    "cpf": "05458618025",
    "rg": "99.888.777-6",
    "createdAt": "2021-02-16T19:40:59.123Z",
    "updatedAt": "2021-02-16T19:40:59.123Z",
    "dependentsCount": 0,
    "id": "602c1fcbc922558f576d2a9f"
  }
]
```

### :chicken: `(200) must return an empty array if there isn't content saved on database` <a name="bff4920131"></a>

```sh
curl -X GET \
http://localhost:50645/beneficiaries \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |

Body: _empty_

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: _empty_
