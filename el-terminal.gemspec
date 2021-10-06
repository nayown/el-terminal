# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "el-terminal"
  spec.version       = "0.1.0"
  spec.authors       = ["jemcv"]
  spec.email         = ["jemcv.dev@gmail.com"]

  spec.summary       = "el-terminal"
  spec.homepage      = "https://github.com/jemcv/el-terminal"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
