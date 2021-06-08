<template>
<b-row>
    <b-col class="wb-container" cols="12">
        <b-row>
            <b-col cols="4">
               <b-row>
                    <b-col id="hero-name" class="hero-name p-2" cols="12" md="12">NAME</b-col>
                </b-row>
                <b-row>
                    <b-col class="hero-type p-2" cols="12" md="12">TYPE <span>{{ hero.type }}</span></b-col>
                </b-row>
                <b-row>
                    <b-col class="hero-stats p-2" cols="12" md="12">
                        <table class="stats">
                            <thead>
                            <tr>
                                <th>M</th>
                                <th>WS</th>
                                <th>BS</th>
                                <th>S</th>
                                <th>T</th>
                                <th>W</th>
                                <th>I</th>
                                <th>A</th>
                                <th>Ld</th>
                            </tr>
                            </thead>
                        <tbody>
                            <tr>
                                <td>{{ hero.stats.m }}</td>
                                <td>{{ hero.stats.ws }}</td>
                                <td>{{ hero.stats.bs }}</td>
                                <td>{{ hero.stats.s }}</td>
                                <td>{{ hero.stats.t }}</td>
                                <td>{{ hero.stats.w }}</td>
                                <td>{{ hero.stats.i }}</td>
                                <td>{{ hero.stats.a }}</td>
                                <td>{{ hero.stats.ld }}</td>
                            </tr>
                        </tbody>
                        </table>
                    </b-col>
               </b-row>
            </b-col>
            <b-col class="hero-equip p-2" cols="4">EQUIPMENT</b-col>
            <b-col class="hero-skills p-2" cols="4">SKILLS, INJURIES, ETC
                <ul class="skills"><li v-for="specialRule in hero.specialRules" :key="specialRule">{{specialRule}}</li></ul>
            </b-col>
        </b-row>


        <b-row>
            <b-col class="hero-exp p-2 pt-3" cols="12">
                <h5>Experience:</h5>
                <table class="exp" id="mytab1">
                <tbody>
                <tr>
                <td><div id="expX-0" class="exp-block"></div></td>
                <td><div id="expX-1" class="exp-block expX-1 double"></div></td>
                <td><div id="expX-2" class="exp-block expX-2"></div></td>
                <td><div id="expX-3" class="exp-block expX-3 double"></div></td>
                <td><div id="expX-4" class="exp-block expX-4"></div></td>
                <td><div id="expX-5" class="exp-block double"></div></td>
                <td><div id="expX-6" class="exp-block"></div></td>
                <td><div id="expX-7" class="exp-block double"></div></td>
                <td><div id="expX-8" class="exp-block"></div></td>
                <td><div id="expX-9" class="exp-block"></div></td>
                <td><div id="expX-10" class="exp-block double"></div></td>
                <td><div id="expX-11" class="exp-block"></div></td>
                <td><div id="expX-12" class="exp-block"></div></td>
                <td><div id="expX-13" class="exp-block double"></div></td>
                <td><div id="expX-14" class="exp-block"></div></td>
                <td><div id="expX-15" class="exp-block"></div></td>
                <td><div id="expX-16" class="exp-block double"></div></td>
                <td><div id="expX-17" class="exp-block"></div></td>
                <td><div id="expX-18" class="exp-block"></div></td>
                <td><div id="expX-19" class="exp-block double"></div></td>
                <td><div id="expX-20" class="exp-block"></div></td>
                <td><div id="expX-21" class="exp-block"></div></td>
                <td><div id="expX-22" class="exp-block"></div></td>
                <td><div id="expX-23" class="exp-block double"></div></td>
                <td><div id="expX-24" class="exp-block"></div></td>
                <td><div id="expX-25" class="exp-block"></div></td>
                <td><div id="expX-26" class="exp-block"></div></td>
                <td><div id="expX-27" class="exp-block double"></div></td>
                <td><div id="expX-28" class="exp-block"></div></td>
                <td><div id="expX-29" class="exp-block"></div></td>
                </tr>
                <tr>
                <td><div id="expX-30" class="exp-block"></div></td>
                <td><div id="expX-31" class="exp-block double"></div></td>
                <td><div id="expX-32" class="exp-block"></div></td>
                <td><div id="expX-33" class="exp-block"></div></td>
                <td><div id="expX-34" class="exp-block"></div></td>
                <td><div id="expX-35" class="exp-block double"></div></td>
                <td><div id="expX-36" class="exp-block"></div></td>
                <td><div id="expX-37" class="exp-block"></div></td>
                <td><div id="expX-38" class="exp-block"></div></td>
                <td><div id="expX-39" class="exp-block"></div></td>
                <td><div id="expX-40" class="exp-block double"></div></td>
                <td><div id="expX-41" class="exp-block"></div></td>
                <td><div id="expX-42" class="exp-block"></div></td>
                <td><div id="expX-43" class="exp-block"></div></td>
                <td><div id="expX-44" class="exp-block"></div></td>
                <td><div id="expX-45" class="exp-block double"></div></td>
                <td><div id="expX-46" class="exp-block"></div></td>
                <td><div id="expX-47" class="exp-block"></div></td>
                <td><div id="expX-48" class="exp-block"></div></td>
                <td><div id="expX-49" class="exp-block"></div></td>
                <td><div id="expX-50" class="exp-block double"></div></td>
                <td><div id="expX-51" class="exp-block"></div></td>
                <td><div id="expX-52" class="exp-block"></div></td>
                <td><div id="expX-53" class="exp-block"></div></td>
                <td><div id="expX-54" class="exp-block"></div></td>
                <td><div id="expX-55" class="exp-block"></div></td>
                <td><div id="expX-56" class="exp-block double"></div></td>
                <td><div id="expX-57" class="exp-block"></div></td>
                <td><div id="expX-58" class="exp-block"></div></td>
                <td><div id="expX-59" class="exp-block"></div></td>
                </tr>
                <tr>
                <td><div id="expX-60" class="exp-block"></div></td>
                <td><div id="expX-61" class="exp-block"></div></td>
                <td><div id="expX-62" class="exp-block double"></div></td>
                <td><div id="expX-63" class="exp-block"></div></td>
                <td><div id="expX-64" class="exp-block"></div></td>
                <td><div id="expX-65" class="exp-block"></div></td>
                <td><div id="expX-66" class="exp-block"></div></td>
                <td><div id="expX-67" class="exp-block"></div></td>
                <td><div id="expX-68" class="exp-block double"></div></td>
                <td><div id="expX-69" class="exp-block"></div></td>
                <td><div id="expX-70" class="exp-block"></div></td>
                <td><div id="expX-71" class="exp-block"></div></td>
                <td><div id="expX-72" class="exp-block"></div></td>
                <td><div id="expX-73" class="exp-block"></div></td>
                <td><div id="expX-74" class="exp-block"></div></td>
                <td><div id="expX-75" class="exp-block double"></div></td>
                <td><div id="expX-76" class="exp-block"></div></td>
                <td><div id="expX-77" class="exp-block"></div></td>
                <td><div id="expX-78" class="exp-block"></div></td>
                <td><div id="expX-79" class="exp-block"></div></td>
                <td><div id="expX-80" class="exp-block"></div></td>
                <td><div id="expX-81" class="exp-block"></div></td>
                <td><div id="expX-82" class="exp-block double"></div></td>
                <td><div id="expX-83" class="exp-block"></div></td>
                <td><div id="expX-84" class="exp-block"></div></td>
                <td><div id="expX-85" class="exp-block"></div></td>
                <td><div id="expX-86" class="exp-block"></div></td>
                <td><div id="expX-87" class="exp-block"></div></td>
                <td><div id="expX-88" class="exp-block"></div></td>
                <td><div id="expX-89" class="exp-block double"></div></td>
                </tr>
                </tbody>
                </table>
            </b-col>
        </b-row>
    </b-col>
</b-row>
</template>

<script>

export default {
    name: 'HeroCard',
    props: ['hero'],
    data() {
        return {
            expPoint: 'x',
            count: 0,

        }
    },
    mounted() {
        for(let i = 0; i < this.hero.startExp; i++){
           document.getElementById('expX-'+i).innerHTML = "x";
        }
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
.wb-container {
    padding-top: 0;
    padding-bottom: 0;
}
.hero-name,
.hero-type,
.hero-equip,
.hero-skills {  
    border-bottom: 2px solid black;
}
.hero-equip,
.hero-skills {
    border-left: 2px solid black;
}
.hero-type {
    span {
        font-weight: bold;
        font-size: 1.2rem;
        padding-left: 15px;
    }
}
table.stats {
    th {
        border: 2px solid black;
        background-color: black;
        color: #fff;
        width: 5%;
         text-align: center;
    }
    td {
        border: 2px solid black;
        text-align: center;
    }
}
.hero-exp {
    .exp {
        display: inline-block;
        .exp-block {
            border: 1px solid black;
            width: 25px;
            height: 25px;
            margin: 0 5px 5px 0;
            font-size: 40px;
            line-height: 10px;
            text-align: center;
            padding: 3px;
        }
        .double {
            border: 4px solid black;
            padding: 0;
        }
    }
}
h5 {
    display: inline-block;
    vertical-align: top;
    margin-right: 15px;
}
.skills {
    list-style: none;
    margin: 0;
    padding: 0;
}

</style>