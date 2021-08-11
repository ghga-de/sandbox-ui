# Copyright 2021 Universität Tübingen, DKFZ and EMBL
# for the German Human Genome-Phenome Archive (GHGA)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM node:16.6.0-buster

COPY . /service
WORKDIR /service

# install dependencies
RUN yarn install && \
    pip install -r ./configure_build_serve/requirements.txt


# create new user and execute as that user
RUN useradd --create-home appuser
WORKDIR /home/appuser
USER appuser

# serve web app:
ENTRYPOINT ["/service/configure_build_serve/run.py"]
