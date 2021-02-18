# [get] /beneficiaries

* [(200) must return an array of beneficiaries if there is content saved on database](#d482c50f67)
* [(200) must return an empty array if there isn't content saved on database](#bff4920131)

---

### :chicken: `(200) must return an array of beneficiaries if there is content saved on database` <a name="d482c50f67"></a>

```sh
curl -X GET \
http://localhost:53044/beneficiaries \
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
    "createdAt": "2021-02-18T15:46:25.595Z",
    "updatedAt": "2021-02-18T15:46:25.595Z",
    "birthDate": "2021-02-18T15:46:25.710Z",
    "name": "Ronaldo",
    "cpf": "11667747169",
    "rg": "00.111.222-3",
    "dependentsCount": 0,
    "id": "602e8bd13aa1b91b3dc9a544"
  },
  {
    "dependents": [],
    "plan": "STANDARD",
    "createdAt": "2021-02-18T15:46:25.595Z",
    "updatedAt": "2021-02-18T15:46:25.595Z",
    "birthDate": "2021-02-18T15:46:25.739Z",
    "name": "Ronaldo",
    "cpf": "23230258134",
    "rg": "99.888.777-6",
    "dependentsCount": 0,
    "id": "602e8bd13aa1b91b3dc9a545"
  }
]
```

### :chicken: `(200) must return an empty array if there isn't content saved on database` <a name="bff4920131"></a>

```sh
curl -X GET \
http://localhost:53044/beneficiaries \
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
