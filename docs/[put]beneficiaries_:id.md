# [put] /beneficiaries/:id

* [(200) 0. must succeed on updating the field "plan" and always return the full updated document](#1ce4931bb0)
* [(200) 1. must succeed on updating the field "plan" and always return the full updated document](#17331d4a6f)
* [(200) 2. must succeed on updating the field "plan" and always return the full updated document](#b348551937)
* [(200) 3. must succeed on updating the field "dependents" and always return the full updated document](#435b7c3d53)
* [(200) 4. must succeed on updating the field "birthDate" and always return the full updated document](#87debe31c3)
* [(200) 5. must succeed on updating the field "cpf" and always return the full updated document](#42f1e34d3c)
* [(200) 6. must succeed on updating the field "name" and always return the full updated document](#9165655a1b)
* [(200) 7. must succeed on updating the field "rg" and always return the full updated document](#f7d3a8a55f)
* [(500) must return a translated error if the beneficiary was not found](#23489d2a97)

---

### :chicken: `(200) 0. must succeed on updating the field "plan" and always return the full updated document` <a name="1ce4931bb0"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b06 \
-d '{
  "plan": "BASIC"
}' \
-H 'accept-language: pt-br' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b06`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "plan": "BASIC"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "BASIC",
  "createdAt": "2021-02-18T17:49:21.428Z",
  "updatedAt": "2021-02-18T17:49:21.616Z",
  "birthDate": "2021-02-18T17:49:21.553Z",
  "name": "Ronaldo",
  "cpf": "10426663004",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602ea8a19590eb37f77a1b06"
}
```

### :chicken: `(200) 1. must succeed on updating the field "plan" and always return the full updated document` <a name="17331d4a6f"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b07 \
-d '{
  "plan": "PREMIUM"
}' \
-H 'accept-language: pt-br' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b07`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "plan": "PREMIUM"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "PREMIUM",
  "createdAt": "2021-02-18T17:49:21.428Z",
  "updatedAt": "2021-02-18T17:49:21.659Z",
  "birthDate": "2021-02-18T17:49:21.639Z",
  "name": "Ronaldo",
  "cpf": "24664061790",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602ea8a19590eb37f77a1b07"
}
```

### :chicken: `(200) 2. must succeed on updating the field "plan" and always return the full updated document` <a name="b348551937"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b08 \
-d '{
  "plan": "STANDARD"
}' \
-H 'accept-language: pt-br' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b08`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
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
  "createdAt": "2021-02-18T17:49:21.428Z",
  "updatedAt": "2021-02-18T17:49:21.679Z",
  "birthDate": "2021-02-18T17:49:21.664Z",
  "name": "Ronaldo",
  "cpf": "55850114130",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602ea8a19590eb37f77a1b08"
}
```

### :chicken: `(200) 3. must succeed on updating the field "dependents" and always return the full updated document` <a name="435b7c3d53"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b09 \
-d '{
  "dependents": [
    "602ea8a19590eb37f77a1b05"
  ]
}' \
-H 'accept-language: pt-br' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b09`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "dependents": [
    "602ea8a19590eb37f77a1b05"
  ]
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [
    "602ea8a19590eb37f77a1b05"
  ],
  "plan": "STANDARD",
  "createdAt": "2021-02-18T17:49:21.428Z",
  "updatedAt": "2021-02-18T17:49:21.712Z",
  "birthDate": "2021-02-18T17:49:21.686Z",
  "name": "Ronaldo",
  "cpf": "83407343183",
  "rg": "00.111.222-3",
  "dependentsCount": 1,
  "id": "602ea8a19590eb37f77a1b09"
}
```

### :chicken: `(200) 4. must succeed on updating the field "birthDate" and always return the full updated document` <a name="87debe31c3"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b0a \
-d '{
  "birthDate": "2021-02-18T17:49:21.480Z"
}' \
-H 'accept-language: pt-br' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b0a`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "birthDate": "2021-02-18T17:49:21.480Z"
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
  "createdAt": "2021-02-18T17:49:21.428Z",
  "updatedAt": "2021-02-18T17:49:21.747Z",
  "birthDate": "2021-02-18T17:49:21.480Z",
  "name": "Ronaldo",
  "cpf": "80434544264",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602ea8a19590eb37f77a1b0a"
}
```

### :chicken: `(200) 5. must succeed on updating the field "cpf" and always return the full updated document` <a name="42f1e34d3c"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b0b \
-d '{
  "cpf": "48074811697"
}' \
-H 'accept-language: pt-br' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b0b`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "cpf": "48074811697"
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
  "createdAt": "2021-02-18T17:49:21.428Z",
  "updatedAt": "2021-02-18T17:49:21.775Z",
  "birthDate": "2021-02-18T17:49:21.754Z",
  "name": "Ronaldo",
  "cpf": "48074811697",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602ea8a19590eb37f77a1b0b"
}
```

### :chicken: `(200) 6. must succeed on updating the field "name" and always return the full updated document` <a name="9165655a1b"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b0c \
-d '{
  "name": "João da Silva"
}' \
-H 'accept-language: pt-br' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b0c`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "name": "João da Silva"
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
  "createdAt": "2021-02-18T17:49:21.428Z",
  "updatedAt": "2021-02-18T17:49:21.806Z",
  "birthDate": "2021-02-18T17:49:21.783Z",
  "name": "João da Silva",
  "cpf": "78885426204",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602ea8a19590eb37f77a1b0c"
}
```

### :chicken: `(200) 7. must succeed on updating the field "rg" and always return the full updated document` <a name="f7d3a8a55f"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b0d \
-d '{
  "rg": "01-123-321-0"
}' \
-H 'accept-language: pt-br' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b0d`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "rg": "01-123-321-0"
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
  "createdAt": "2021-02-18T17:49:21.428Z",
  "updatedAt": "2021-02-18T17:49:21.837Z",
  "birthDate": "2021-02-18T17:49:21.815Z",
  "name": "Ronaldo",
  "cpf": "32522304372",
  "rg": "01-123-321-0",
  "dependentsCount": 0,
  "id": "602ea8a19590eb37f77a1b0d"
}
```

### :chicken: `(500) must return a translated error if the beneficiary was not found` <a name="23489d2a97"></a>

```sh
curl -X PUT \
http://localhost:55161/beneficiaries/602ea8a19590eb37f77a1b0f \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries/602ea8a19590eb37f77a1b0f`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |

Body: _empty_

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "BENEFICIARIES_ERROR_USER_NOT_FOUND",
  "field": "id",
  "message": "Beneficiário \"602ea8a19590eb37f77a1b0f\" não encontrado."
}
```
