class UrlMappings {

	static mappings = {

        "/link/$action/$id?"(controller:"link") {
            action = [GET:"$action" as String, DELETE:"delete", POST:"$actiond" as String, OPTIONS:"options"]
        }

		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

		"/"(view:"/index")
		"500"(view:'/error')
	}
}
