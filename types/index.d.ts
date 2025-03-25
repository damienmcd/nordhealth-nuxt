interface form {
  email: string
  password: string
  offers: boolean
  policies: boolean
}

interface errors {
  email: {
    error: string
    label: string
  }
  password: {
    error: string
    label: string
  }
  policies: {
    error: string
    label: string
  }
}

interface user {
  createdAt: string
  email: string
  password: string
  deleted: boolean
  id: string
  offers: boolean
  policies: boolean
}
