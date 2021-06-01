# Doppler CI/CD Examples

Examples of using Doppler to provide secrets to CI/CD platforms.

## GCP Cloud Build

Check out our [GCP Cloud Build Secrets documentation](https://docs.doppler.com/docs/enclave-gcp-cloud-build) for configuration instructions.

* [GCP Cloud Build with GCP Secrets Manager](cloudbuild-secret-manager.yaml)  
Secrets as environment variables using the Doppler CLI with the Doppler Service Token stored in GCP Secret Manager.

* [GCP Cloud Build Substituion Variables](cloudbuild-substitution-variables.yaml)  
Secrets as environment variables using the Doppler CLI and the Doppler Service Token stored in the Trigger's substitution variables.

## GitLab

Check out our [GitLab CI/CD Secrets documentation](https://docs.doppler.com/docs/enclave-gitlab) for configuration instructions