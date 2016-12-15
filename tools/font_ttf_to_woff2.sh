#!/bin/sh
#
# Copyright 2016 LambdaStack All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# NOTE: This is only used so that self-hosting the web fonts can be done for environments that do not have access
# to the outside world.

# NB: Need to install ttf2woff2 nodejs app globally with the following:
# npm install ttf2woff2 -g

# NOTE: npm project is located at https://www.npmjs.com/package/ttf2woff2
# Source: https://github.com/hanscj1/woff2

# NOTE: For this to work on OSX you need to have XCode installed because it wraps
# the C/C++ app from the Google woff2 project at https://github.com/google/woff2

# usage: ./font_ttf_to_woff2.sh /font_directory/*    -OR-   ./font_ttf_to_woff2.sh /font_directory/SourcePro.ttf

set -e

source_dir=$1

if [[ -z $source_dir ]]; then
    echo "Directory/file or directory/* or file needs to be passed in"
    exit 1
fi

for i in $(ls $source_dir); do
    new_file=$(echo $i | sed 's/.ttf/.woff2/' | xargs)
    cat $i | ttf2woff2 >> $new_file
done

#
# NOTE: Need to copy the convert woff2 files to the /public/fonts/<whatever font name> directory
# NOTE: Update the @font text file to reflect the source of the local fonts
#
