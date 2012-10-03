package pl.touk.workshop.angular

import grails.converters.JSON

class LinkController {

    static allowedMethods = ["GET", "POST"]

    def list() {
        def links = Link.list(params)
        render links as JSON
    }

    def get() {
        def link = Link.get(params.id)
        render link as JSON
    }

    def add() {
        def link = request.JSON as Link
        link.save(failOnError: true)
        render link as JSON
    }

    def update() {
        def newLink = request.JSON as Link
        def link = Link.get(params.id)
        link.properties = newLink.properties
        link.save(failOnError: true)
        render link as JSON
    }

    def options() {
        log.info("OPTIONS called")
        render "OK"
    }

}
