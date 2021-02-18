# [get] /beneficiaries

* [(200) must return an array of beneficiaries if there is content saved on database](#d482c50f67)
* [(200) must return an empty array if there isn't content saved on database](#bff4920131)

---

### :chicken: `(200) must return an array of beneficiaries if there is content saved on database` <a name="d482c50f67"></a>

```sh
curl -X GET \
http://localhost:55142/beneficiaries \
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
    "createdAt": "2021-02-18T17:49:18.571Z",
    "updatedAt": "2021-02-18T17:49:18.571Z",
    "birthDate": "2021-02-18T17:49:18.690Z",
    "name": "Ronaldo",
    "cpf": "65862708715",
    "rg": "00.111.222-3",
    "dependentsCount": 0,
    "id": "602ea89e0bf03537ed46fe75"
  },
  {
    "dependents": [],
    "plan": "STANDARD",
    "createdAt": "2021-02-18T17:49:18.571Z",
    "updatedAt": "2021-02-18T17:49:18.571Z",
    "birthDate": "2021-02-18T17:49:18.720Z",
    "name": "Ronaldo",
    "cpf": "60274704293",
    "rg": "99.888.777-6",
    "dependentsCount": 0,
    "id": "602ea89e0bf03537ed46fe76"
  }
]
```

### :chicken: `(200) must return an empty array if there isn't content saved on database` <a name="bff4920131"></a>

```sh
curl -X GET \
http://localhost:55142/beneficiaries \
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
