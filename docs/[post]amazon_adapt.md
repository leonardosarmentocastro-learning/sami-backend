# [post] /amazon/adapt

* [(200) deve retornar uma estrutura de dados normalizados a gosto do provedor "amazon"](#104f7a3eca)

---

### :chicken: `(200) deve retornar uma estrutura de dados normalizados a gosto do provedor "amazon"` <a name="104f7a3eca"></a>

```sh
curl -X POST \
http://localhost:49155/amazon/adapt \
-d '{
  "escola": {
    "codEnt": 10000222,
    "nome": "escola das trevas"
  }
}' \
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/amazon/adapt`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| content-type | application/json |

Body: 

```
{
  "escola": {
    "codEnt": 10000222,
    "nome": "escola das trevas"
  }
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "idEscola": 10000222,
  "nomeEscola": "escola das trevas",
  "estado": "SP"
}
```
