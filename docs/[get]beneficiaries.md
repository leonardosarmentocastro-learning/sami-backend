# [get] /beneficiaries

* [(200) must return an array of beneficiaries if there is content saved on database](#d482c50f67)
* [(200) must return an empty array if there isn't content saved on database](#bff4920131)

---

### :chicken: `(200) must return an array of beneficiaries if there is content saved on database` <a name="d482c50f67"></a>

```sh
curl -X GET \
http://localhost:50977/beneficiaries \
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
    "birthDate": "2021-02-16T19:57:53.488Z",
    "name": "Ronaldo",
    "cpf": "33458602364",
    "rg": "00.111.222-3",
    "createdAt": "2021-02-16T19:57:53.513Z",
    "updatedAt": "2021-02-16T19:57:53.513Z",
    "dependentsCount": 0,
    "id": "602c23c1f1ff8397ad429c12"
  },
  {
    "dependents": [],
    "plan": "STANDARD",
    "birthDate": "2021-02-16T19:57:53.520Z",
    "name": "Ronaldo",
    "cpf": "76216574485",
    "rg": "99.888.777-6",
    "createdAt": "2021-02-16T19:57:53.525Z",
    "updatedAt": "2021-02-16T19:57:53.525Z",
    "dependentsCount": 0,
    "id": "602c23c1f1ff8397ad429c13"
  }
]
```

### :chicken: `(200) must return an empty array if there isn't content saved on database` <a name="bff4920131"></a>

```sh
curl -X GET \
http://localhost:50977/beneficiaries \
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
