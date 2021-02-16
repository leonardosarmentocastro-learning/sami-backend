# [post] /beneficiaries

* [(200) must succeed on creating beneficiaries and return the newly created doc](#cc6b39b5c9)
* [(500) must fail on creating an beneficiary as field "birthDate" is empty](#3888ca174c)
* [(500) must fail on creating an beneficiary as field "name" is empty](#bb9a7abaaf)
* [(500) must fail on creating an beneficiary as field "cpf" is empty](#33d04e3c30)
* [(500) must fail on creating an beneficiary as field "rg" is empty](#94e8462dab)

---

### :chicken: `(200) must succeed on creating beneficiaries and return the newly created doc` <a name="cc6b39b5c9"></a>

```sh
curl -X POST \
http://localhost:50987/beneficiaries \
-d '{
  "birthDate": "2021-02-16T19:57:55.174Z",
  "name": "Ronaldo",
  "cpf": "48871463536",
  "rg": "00.111.222-3",
  "plan": "STANDARD"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "birthDate": "2021-02-16T19:57:55.174Z",
  "name": "Ronaldo",
  "cpf": "48871463536",
  "rg": "00.111.222-3",
  "plan": "STANDARD"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "STANDARD",
  "birthDate": "2021-02-16T19:57:55.174Z",
  "name": "Ronaldo",
  "cpf": "48871463536",
  "rg": "00.111.222-3",
  "createdAt": "2021-02-16T19:57:55.218Z",
  "updatedAt": "2021-02-16T19:57:55.218Z",
  "dependentsCount": 0,
  "id": "602c23c32c814697b2bf67b0"
}
```

### :chicken: `(500) must fail on creating an beneficiary as field "birthDate" is empty` <a name="3888ca174c"></a>

```sh
curl -X POST \
http://localhost:50987/beneficiaries \
-d '{
  "birthDate": "",
  "name": "Ronaldo",
  "cpf": "06860356316",
  "rg": "00.111.222-3",
  "plan": "STANDARD"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "birthDate": "",
  "name": "Ronaldo",
  "cpf": "06860356316",
  "rg": "00.111.222-3",
  "plan": "STANDARD"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "birthDate",
  "message": "O campo \"birthDate\" é mandatório."
}
```

### :chicken: `(500) must fail on creating an beneficiary as field "name" is empty` <a name="bb9a7abaaf"></a>

```sh
curl -X POST \
http://localhost:50987/beneficiaries \
-d '{
  "birthDate": "2021-02-16T19:57:55.255Z",
  "name": "",
  "cpf": "14306686361",
  "rg": "00.111.222-3",
  "plan": "STANDARD"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "birthDate": "2021-02-16T19:57:55.255Z",
  "name": "",
  "cpf": "14306686361",
  "rg": "00.111.222-3",
  "plan": "STANDARD"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "name",
  "message": "O campo \"name\" é mandatório."
}
```

### :chicken: `(500) must fail on creating an beneficiary as field "cpf" is empty` <a name="33d04e3c30"></a>

```sh
curl -X POST \
http://localhost:50987/beneficiaries \
-d '{
  "birthDate": "2021-02-16T19:57:55.263Z",
  "name": "Ronaldo",
  "cpf": "",
  "rg": "00.111.222-3",
  "plan": "STANDARD"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "birthDate": "2021-02-16T19:57:55.263Z",
  "name": "Ronaldo",
  "cpf": "",
  "rg": "00.111.222-3",
  "plan": "STANDARD"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "cpf",
  "message": "O campo \"cpf\" é mandatório."
}
```

### :chicken: `(500) must fail on creating an beneficiary as field "rg" is empty` <a name="94e8462dab"></a>

```sh
curl -X POST \
http://localhost:50987/beneficiaries \
-d '{
  "birthDate": "2021-02-16T19:57:55.273Z",
  "name": "Ronaldo",
  "cpf": "48462673690",
  "rg": "",
  "plan": "STANDARD"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "birthDate": "2021-02-16T19:57:55.273Z",
  "name": "Ronaldo",
  "cpf": "48462673690",
  "rg": "",
  "plan": "STANDARD"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "rg",
  "message": "O campo \"rg\" é mandatório."
}
```
