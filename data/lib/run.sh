#!/bin/bash

basedir=$1
files=$(ls $basedir/*.dat)

for file in $files
do
  fname=$(basename $file '.dat')
  node makeSpec.js < $file > "spec/$fname.spec.js"
done